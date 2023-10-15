import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { WeatherService } from 'src/app/modules/wheather/services/weather.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheather-home',
  templateUrl: './wheather-home.component.html',
  styleUrls: []
})
export class WheatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Campina Grande';
  weatherDatas!: WeatherDatas;
  searchIcon =  faMagnifyingGlass;

  constructor(private weatherService: WeatherService) { }


  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService
    .getWatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
          response && (this.weatherDatas = response);
          console.log(this.weatherDatas);
          console.log(this.weatherDatas.main);
        },
        error: (error) => console.log(error),
      })
  }

  onSubmit(): void {
      this.getWeatherData(this.initialCityName);
      this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
