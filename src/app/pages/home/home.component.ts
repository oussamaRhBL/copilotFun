import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {HeaderComponentComponent} from '../../components/header-component/header-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToNotes() {
    console.log("clicked")
    this.router.navigate(['/notes']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
