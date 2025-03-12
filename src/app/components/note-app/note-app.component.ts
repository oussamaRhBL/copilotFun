import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-note-app',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-app.component.html',
  styleUrl: './note-app.component.css'
})
export class NoteAppComponent {}
