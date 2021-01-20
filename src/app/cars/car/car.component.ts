import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  car: { producer: string, year: number, power: number, price: number, owner: { name: string, age: number, experience: number } };

}
