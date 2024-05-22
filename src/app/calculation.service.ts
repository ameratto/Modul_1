import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  calculateSum(array: number[][]): number[] {
    if (array.length === 0) {
      return [];
    }

    const cols = array[0].length;
    const result = Array(cols).fill(0);

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < array.length; row++) {
        const value = array[row][col];
        if (value > 0 && value % 2 === 0) {
          result[col] += value;
        }
      }
    }

    return result;
  }
}
