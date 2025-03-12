import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NoteAppComponent} from '../../components/note-app/note-app.component';
import {HeaderComponentComponent} from '../../components/header-component/header-component.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [RouterModule, NoteAppComponent, HeaderComponentComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {

}

