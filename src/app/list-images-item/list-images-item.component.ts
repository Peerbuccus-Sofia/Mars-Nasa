import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-images-item',
  templateUrl: './list-images-item.component.html',
  styleUrls: ['./list-images-item.component.css']
})
export class ListImagesItemComponent implements OnInit {

  @Input() marsImgSrc: Array<Object>;

  constructor() {
    this.marsImgSrc = [];
  }

  ngOnInit(): void {
   
  }
}
