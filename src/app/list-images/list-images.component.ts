import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
 
   public marsImgSrc: any;
    day !: number;
    month !: number;
    year !: number;

  constructor(private marsPhotosService : ServiceService) { 
  }

  ngOnInit(){
  }

  date(){
    //console.log(this.year, this.month, this.day);
    this.marsPhotosService.getMarsImagesFromAPI(this.year, this.month, this.day).subscribe(
      (response) => {
        this.marsImgSrc = response.photos;
        // if(response.photos === []){
        //   console.log('Erreur');
        // }
        console.log(this.marsImgSrc);
      }
    );
  }

}
