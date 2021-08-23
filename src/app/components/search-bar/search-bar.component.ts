import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  companyNames: string[] = ['Golden Tulip', 'TOTVS']
  matches: string[] = []
  showMatches: boolean = false

  constructor() { }

  ngOnInit(): void {
    //todo implement service to fetch all names
    //idea OR simply reference NgRx store implementation
  }

  checkMatches(evt: any) {
    console.log(evt)
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
  }
}
