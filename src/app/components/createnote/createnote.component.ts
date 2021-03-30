import { Component, OnInit,ElementRef, HostListener} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesServiceService } from '../../service/notesService/notes-service.service'
import { NotesComponent } from '../notes/notes.component'

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  public text: String;
  constructor(private snackBar: MatSnackBar, private noteService: NotesServiceService, private display: NotesComponent,private eRef: ElementRef) { 
  }

  title: String;
  description: String;
  color:String="";
  
  ngOnInit(): void {

  }
  step = 0;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.text = "clicked inside";
    } else {
      this.text = "clicked outside";
    }
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  openSnackBar = (message, action) => {
    this.snackBar.open(message, action, {
      duration: 3000,
    })
  }

  addNote = () => {
    if(localStorage.getItem('color')){
      this.color=localStorage.getItem('color');
      localStorage.removeItem('color');
    }
    let data = {
      "title": this.title,
      "description": this.description,
      "color":this.color
    }

    this.noteService.createNote(data).subscribe((res) => {
      console.log("Note Added ", res)
      this.display.getAllNotes();
      this.clearInput();
    },
      (error) => {
        console.log("Error in creating note ", error);
      })
  }

  clearInput = () => {
    this.title = "";
    this.description = "";
  }

  isShown: boolean = false;

  toggleShow() {
    this.isShown = !this.isShown;
  }

  myColor=()=>{
    let a = localStorage.getItem('color')
    return { 'background-color':a}
  }
}
