import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { LabelsComponent } from './components/labels/labels.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { TrashComponent } from './components/trash/trash.component';
import { AuthenticationGuard } from './authentication.guard'

const routes: Routes = [
  { path: '', redirectTo: "/register", pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPassComponent },
  { path: 'resetpassword/:token', component: ResetPassComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard],
    children: [
      { path: '', redirectTo: "notes", pathMatch: 'full' },
      { path: 'notes', component: NotesComponent },
      { path: 'reminders', component: RemindersComponent },
      { path: 'labels', component: LabelsComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
