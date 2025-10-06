import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, RouterModule],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Jose Ramses Aldama');
}
