import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mars-Nasa';
  marsPhotos : any;

  constructor(private marsPhotosService : ServiceService){
    // this.marsPhotosService.getMarsImagesFromAPI().subscribe(data=>{console.warn(data)
    //})
  }
  
  ngOnInit(): void{
    this.marsPhotosService.getMarsImagesFromAPI().subscribe(data=>{console.warn(data)
    })
  }

}
