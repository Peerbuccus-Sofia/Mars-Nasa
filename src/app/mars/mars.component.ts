import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  @Input() marsPhoto : string;
  constructor() { }
  
  @Input() appareilName : string;
  ngOnInit(): void {
  }

}
