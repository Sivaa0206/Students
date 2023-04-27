import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values = [
    { id: 1, name: 'Siva', description: 'Full stack Developer' },
    { id: 2, name: 'Ravi', description: 'Angular Developer' },
    { id: 3, name: 'Anandha Siva', description: 'Angular Developer' },
    { id: 4, name: 'Gabriel', description: 'Javascript Developer'}
  ];
}
