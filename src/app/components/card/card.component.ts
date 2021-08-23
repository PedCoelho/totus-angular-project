import { Company } from './../../interfaces/company.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() company!: Company;

  constructor() { }


  ngOnInit(): void {
  }

}
