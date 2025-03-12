import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  menoList = [1, 2, 3, 4, 5];

 /* drop(event: CdkDragDrop<number[]>) {
    moveItemInArray(this.menoList, event.previousIndex, event.currentIndex);
  }
}*/
}
