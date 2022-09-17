import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Services/weather.service'

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.getData('Beirut')
  }

  weatherData: any;

  getData(city: any) {

    this.weatherService.getWeatherData(city).subscribe((result) => this.weatherData = result)

  }


}
