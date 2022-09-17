import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

}
