import { SearchBarService } from './../search-bar/shared/search-bar.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company.model';
import { trigger, transition, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition('void=>*', [
        style({ opacity: 0 }),
        style({ transform: 'translateY(0%)' }),
        group([
          animate('0.2s ease', style({ opacity: 0.6 })),
          animate('0.2s ease', style({ transform: 'translateY(-4%)' })),
        ]),
        animate('0.4s ease', style({ transform: 'translateY(0%)' })),
      ]),

    ])
  ]
})
export class SearchResultsComponent implements OnInit {

  results: Company[] = []

  constructor(private searchbarService: SearchBarService) { }

  ngOnInit(): void {
    this.searchbarService.results$.subscribe(companies => this.results = companies);
  }

}
