import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import {MemoComponent, MemoModel} from '../memo/memo.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MemoComponent, CdkDrag, NgForOf, CdkDropList, CdkDropListGroup],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  todoMemos: MemoModel[]= [
      { title: 'Memo 1', content: 'Content 1', date: '2025-03-12',color:'#ffb3ba' },
      { title: 'Memo 2', content: 'Content 2', date: '2025-03-13' ,color:'#ffdfba'}
    ];

  doneMemos: MemoModel[]= [
    { title: 'Memo 3', content: 'Content 3', date: '2025-03-14',color:'#ffffba' }
  ];
  trackByFn(index: number, item: MemoModel): number {
    return index;
  }

  drop(event: CdkDragDrop<MemoModel[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
