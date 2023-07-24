import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  square = document.getElementById("square")

  @Input() value: "X" | "O";
  constructor() {
    this.value = "X";
  }
}
