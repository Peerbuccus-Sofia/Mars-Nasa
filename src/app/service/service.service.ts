import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    marsPhotos = [{
     id:'',
     img_src: ''
    }]

  key = "xSojeW2LU9QzRUytpKXk4kV1FXHSPRa8Uh108MSi";
  url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";

  constructor(private http: HttpClient) { 
  }

  getMarsImagesFromAPI(){
    return this.http.get<any>(this.url);
  }



}
