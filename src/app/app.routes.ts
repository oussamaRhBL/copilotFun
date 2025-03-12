import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MemoComponent} from './components/memo/memo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'notes', component: NoteListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'memo', component: MemoComponent },

];
