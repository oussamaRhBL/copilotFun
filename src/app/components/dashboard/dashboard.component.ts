import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MemoComponent, MemoModel} from '../memo/memo.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MemoComponent, CdkDrag, NgForOf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  memoList: MemoModel[] = [
    { title: 'Memo 1', content: 'Content 1', date: '2025-03-12' },
    { title: 'Memo 2', content: 'Content 2', date: '2025-03-13' },
    { title: 'Memo 3', content: 'Content 3', date: '2025-03-14' }
  ];
  drop(event: CdkDragDrop<MemoModel[]>) {
    moveItemInArray(this.memoList, event.previousIndex, event.currentIndex);
  }

}
