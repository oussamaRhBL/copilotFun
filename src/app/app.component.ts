import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MemoComponent } from './components/memo/memo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HomeComponent, DashboardComponent, MemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'copilot-fun';
}
