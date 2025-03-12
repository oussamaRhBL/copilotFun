import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'notes', component: NoteListComponent }
];
