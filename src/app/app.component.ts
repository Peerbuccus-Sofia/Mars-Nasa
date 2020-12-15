import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mars-Nasa';

  marsPhotos = [
    {id:'1',
     img_src:"https://images.ladepeche.fr/api/v1/images/view/5f22c8f6d286c20d6e2219b7/large/image.jpg?v=1" 
    },
    {
      id:'2',
      img_src:"https://cdn.radiofrance.fr/s3/cruiser-production/2020/11/a742b69b-d800-4a3d-a3d0-2912d050e482/1200x680_mars_illustration_-_westend61_-_getty.jpg"
    },
    {
      id:'3',
      img_src:"https://photos.lci.fr/images/1280/720/panorama-mars-9cfbf9-0@1x.jpeg"
    }
  ]
}
