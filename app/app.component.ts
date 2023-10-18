import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'HOME - Ingles - Mobeats';

  constructor(private titleService: Title) { }

  ngOnInit() {
    // Set the title of the browser window
    this.titleService.setTitle(this.title);
  }
}
