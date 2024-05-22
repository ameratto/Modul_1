import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  form: FormGroup;
  @Output() arrayGenerated = new EventEmitter<number[][]>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rows: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
      cols: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
      randomize: [false],
      array: this.fb.array([])
    });
  }

  get array(): FormArray {
    return this.form.get('array') as FormArray;
  }

  onGenerate() {
    const rows = this.form.value.rows;
    const cols = this.form.value.cols;
    const randomize = this.form.value.randomize;
    this.array.clear();
    if (rows > 10 || cols > 10) {
      return;
    }

    for (let i = 0; i < rows; i++) {
      const row = this.fb.array([]);
      for (let j = 0; j < cols; j++) {
        row.push(this.fb.control(randomize ? Math.floor(Math.random() * 100) : 0, Validators.required));
      }
      this.array.push(row);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const generatedArray = this.array.value;
      this.arrayGenerated.emit(generatedArray);
    }
  }
}
