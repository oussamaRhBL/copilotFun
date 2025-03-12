import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'note-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-app.component.html',
  styleUrl: './note-app.component.css'
})
export class NoteAppComponent {

  @Input()  firstTitle = 'First Note';
  @Input()  secondTitle = 'Second Note';
  @Input() decription= 'This is a description of the note';
  @Input()  timeToDo= '2021-09-01';
  @Input()   percent= '0.5%';
}

