import { Component, OnInit, Input } from '@angular/core';

let colors = [
  'pink-glow',
  'red-glow',
  'orange-glow',
  'yellow-glow',
  'green-glow',
  'blue-glow',
  'purple-glow'
];

@Component({
  selector: 'milkshake-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public rainbowClass: string = '';
  @Input() formInputName: string;
  @Input() placeholderText: string;
  constructor() { }

  ngOnInit() {
  }

  rainbow() {
    let colorIdx = Math.floor(Math.random() * (+6 - +0)) + +0; 
    this.rainbowClass = colors[colorIdx];
    setTimeout(() => {
      this.rainbowClass = '';
    }, 500);
  }

}
