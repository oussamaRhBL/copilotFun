import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NoteAppComponent} from '../../components/note-app/note-app.component';
import {HeaderComponentComponent} from '../../components/header-component/header-component.component';
import {CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [RouterModule, NoteAppComponent,CommonModule, DragDropModule, HeaderComponentComponent, CdkDropList],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  todo = [
    { title: 'Note 1', content: 'Content 1' },
    { title: 'Note 2', content: 'Content 2' }
  ];

  inProgress = [
    { title: 'Note 3', content: 'Content 3' }
  ];

  done = [
    { title: 'Note 4', content: 'Content 4' }
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}

