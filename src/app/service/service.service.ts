import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  key = "xSojeW2LU9QzRUytpKXk4kV1FXHSPRa8Uh108MSi";
  url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-10-10&api_key=${this.key}`;

  marsPhoto = [
    { id : '',
      img_scr :''}
  ]
  constructor(private http: HttpClient) { 
  }

  getMarsImagesFromAPI(){
    return this.http.get<any>(this.url);
  }



}
