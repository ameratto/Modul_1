import { Component } from '@angular/core';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  inputArray: number[][] = [];
  result: number[] = [];

  constructor(private calculationService: CalculationService) {}

  onArrayGenerated(array: number[][]) {
    this.inputArray = array;
    this.result = this.calculationService.calculateSum(array);
  }
}
  