import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { FormsModule } from '@angular/forms';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NotesComponent } from './components/notes/notes.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { LabelsComponent } from './components/labels/labels.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
    ResetPassComponent,
    DashboardComponent,
    NotesComponent,
    RemindersComponent,
    LabelsComponent,
    ArchiveComponent,
    TrashComponent,
    CreatenoteComponent,
    DisplaynotesComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
