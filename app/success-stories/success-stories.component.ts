import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent implements OnInit {
  title = 'Success Story - Mobeats';

  constructor(private titleService: Title) { }

  ngOnInit() {
    // Set the title of the browser window
    this.titleService.setTitle(this.title);
  }
}
