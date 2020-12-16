import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
 
   id? : number;
  @Input() marsImgSrc: String;


  constructor() { 
    this.id;
    this.marsImgSrc ="";
  }

  ngOnInit(): void {
  }

}
