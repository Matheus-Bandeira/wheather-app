import { Component, Input } from '@angular/core';
import { faTemperatureLow, faTemperatureHigh, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent  {

  @Input() weatherDatasInput!: WeatherDatas;

  // Dados da previsão do tempo recebidos pelo componente pai
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon   = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}