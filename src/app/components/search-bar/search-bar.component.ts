import { SearchBarService } from './shared/search-bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  companyNames: string[] = []
  matches: string[] = []
  showMatches: boolean = false

  constructor(private searchbarService: SearchBarService) { }

  ngOnInit() {
    //idea mocked scenario - implement service to fetch all names
    // let companies = await this.searchbarService.getCompanies()
    // this.companyNames = companies.map(x => x.name)
    this.searchbarService.getCompanies()
      .subscribe(companies => this.companyNames = companies.map(x => x.name));

    //todo OR simply reference NgRx store implementation

  }

  checkMatches(evt: any) {
    // console.log(evt)
    let querry = evt.target.value.toUpperCase()
    if (!querry.length) {
      this.matches = []
      return
    }

    let matches = this.companyNames.filter(x => x.toUpperCase().includes(querry))

    this.matches = matches.map(x => x.toUpperCase())

  }

  clearMatches() {
    this.matches = []
  }

  handleSearch(value: string, input: HTMLInputElement) {

    this.clearMatches()

    input.value = value

    //todo implement search operations / service
    //todo preferably using Redux store 
    this.searchbarService.performSearch(value)
  }
}
