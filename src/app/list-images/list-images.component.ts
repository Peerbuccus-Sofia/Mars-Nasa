import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
 
   public marsImgSrc: any;

  constructor(private marsPhotosService : ServiceService) { 
   // this.marsImgSrc = [];
  }

  ngOnInit(): void{
    this.marsPhotosService.getMarsImagesFromAPI().subscribe(
      (response) => {
        this.marsImgSrc = response.photos;
        console.log(response.photos);
      }
    );
    
  }

}
