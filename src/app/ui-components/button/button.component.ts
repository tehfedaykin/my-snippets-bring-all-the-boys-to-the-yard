import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'milkshake-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public isSparkling: boolean = false;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  sparkle() {
    this.isSparkling = true;
    setTimeout(() => {
      this.isSparkling = false;
    }, 350);
  }

}
