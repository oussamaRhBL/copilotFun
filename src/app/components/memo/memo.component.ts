import {Component, Input} from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {NgIf, NgStyle} from '@angular/common';

export type MemoModel ={
  title: string;
  content: string;
  date: string;
  color?: string;
  state: 'todo' | 'done';
}

@Component({
  selector: 'app-memo',
  standalone: true,
  imports: [
    CdkDrag,
    NgStyle,
    NgIf
  ],
  templateUrl: './memo.component.html',
  styleUrl: './memo.component.css'
})
export class MemoComponent {
  @Input()
  memo? : MemoModel;

}
