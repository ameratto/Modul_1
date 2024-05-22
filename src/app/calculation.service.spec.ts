import { TestBed } from '@angular/core/testing';
import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate sum of even positive numbers in each column', () => {
    const inputArray = [
      [1, 2, 3],
      [4, -5, 6],
      [7, 8, -9]
    ];
    const expected = [4, 10, 6];
    const result = service.calculateSum(inputArray);
    expect(result).toEqual(expected);
  });

  it('should return an empty array if input array is empty', () => {
    const inputArray: number[][] = [];
    const expected: number[] = [];
    const result = service.calculateSum(inputArray);
    expect(result).toEqual(expected);
  });

  it('should handle arrays with negative and zero values', () => {
    const inputArray = [
      [-1, 2, 0],
      [4, -5, 6],
      [7, 0, -9]
    ];
    const expected = [4, 2, 6];
    const result = service.calculateSum(inputArray);
    expect(result).toEqual(expected);
  });
});
