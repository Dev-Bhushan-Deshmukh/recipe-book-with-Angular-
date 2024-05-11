import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-book';
}
