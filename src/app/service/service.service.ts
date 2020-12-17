import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  key = "xSojeW2LU9QzRUytpKXk4kV1FXHSPRa8Uh108MSi";

  constructor(private http: HttpClient) { 
  }

  getMarsImagesFromAPI(year:number, month:number, day:number){
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${this.key}`;
      return this.http.get<any>(url);
  }



}
