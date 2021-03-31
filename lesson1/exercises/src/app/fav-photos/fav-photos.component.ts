import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://assets-animated.rbl.ms/444886/980x.gif';
  image3 = 'https://66.media.tumblr.com/631c69337e2973028697234278224c06/tumblr_pfov4ozQD41xcyatfo1_400.gif';

  constructor() { }

  ngOnInit() {
  }

}