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
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MemoComponent, CdkDrag, NgForOf, CdkDropList, CdkDropListGroup, NgIf, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  newMemo: Partial<MemoModel> = { title: '', content: '', state: 'todo' };
  showForm: boolean = false;
  constructor(private router: Router) {}
  todoMemos: MemoModel[]= [
      { title: 'Memo 1', content: 'Content 1', date: '2025-03-12',color:'#ffb3ba',state:'todo' },
      { title: 'Memo 2', content: 'Content 2', date: '2025-03-13' ,color:'#ffdfba',state:'todo'}
    ];

  doneMemos: MemoModel[]= [
    { title: 'Memo 3', content: 'Content 3', date: '2025-03-14',color:'#ffffba' ,state:'done'}
  ];
  trackByFn(index: number, item: MemoModel): number {
    return index;
  }

  drop(event: CdkDragDrop<MemoModel[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const item = event.previousContainer.data[event.previousIndex];
      item.state = event.container.id === 'doneList' ? 'done' : 'todo';
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  addMemo() {
    if (this.newMemo.title && this.newMemo.content) {
      const memo: MemoModel = {
        title: this.newMemo.title,
        content: this.newMemo.content,
        date: new Date().toISOString(),
        state: 'todo'
      };
      this.todoMemos.push(memo);
      this.newMemo = { title: '', content: '', state: 'todo' };
      this.showForm = false; // Hide the form after adding the memo
    }
  }
  goHome() {
    this.router.navigate(['/home']);
  }
  toggleForm() {
    this.showForm = !this.showForm;
  }
}
