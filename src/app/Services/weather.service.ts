import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { 
  }

  getWeatherData(city:any)
{
  
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=dc29beaa312959fe77268ff3e6d35e46')
    
  }

}
