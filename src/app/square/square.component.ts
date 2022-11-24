import { Component, Input, OnInit } from '@angular/core';
import { Square } from './square.entity';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() value!: Square;
  @Input() disable!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
