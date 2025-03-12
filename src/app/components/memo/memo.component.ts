import {Component, Input} from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

export type MemoModel ={
  title: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-memo',
  standalone: true,
  imports: [
    CdkDrag
  ],
  templateUrl: './memo.component.html',
  styleUrl: './memo.component.css'
})
export class MemoComponent {
  @Input()
  memoModel? : MemoModel;
}
