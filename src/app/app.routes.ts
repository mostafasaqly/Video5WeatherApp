import { Routes } from '@angular/router';
import { WeatherComponent } from './Components/weather/weather.component';
import { WeatherListComponent } from './Components/weather-list/weather-list.component';

export const routes: Routes = [
  {path:'', redirectTo:'weather', pathMatch:'full'},
  {path: 'weather', component:WeatherComponent, title: 'Weather'},
  {path: 'weather-list', component:WeatherListComponent, title: 'Weather-list'}
];
