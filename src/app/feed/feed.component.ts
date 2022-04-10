import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  cards: any[];

  constructor() {
    this.cards = [1, 2, 3];
  }

  ngOnInit(): void {
  }

  

}
