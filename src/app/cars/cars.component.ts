import {Component, OnInit} from '@angular/core';
import {cars} from '../../data-base/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars = cars;
}

