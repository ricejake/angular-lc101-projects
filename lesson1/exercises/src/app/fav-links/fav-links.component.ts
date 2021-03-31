import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.google.com/', 'https://www.ebay.com/', 'https://www.amazon.com/'];
  constructor() { }

  ngOnInit() {
  }

}
