import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MemoComponent } from './components/memo/memo.component';
import {DragDrop, DragDropModule} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HomeComponent, DashboardComponent,DragDropModule, MemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'copilot-fun';
}
