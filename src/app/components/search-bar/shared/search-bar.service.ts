import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { Company } from './../../../interfaces/company.model';
import { COMPANIES } from 'src/app/data/mock-companies';

@Injectable({
  providedIn: 'root',
})

export class SearchBarService {
  results$: Observable<Company[]>

  private resultsSubject: Subject<Company[]>;

  constructor() {
    this.resultsSubject = new Subject<Company[]>();
    this.results$ = this.resultsSubject.asObservable();
  }

  getCompanies(): Observable<Company[]> {
    let companies = of(COMPANIES);
    return companies;
  }

  // getResults(): Observable<Company[]> {
  //   let results = of(this.results);
  //   return results;
  // }

  performSearch(query: string): void {
    let results: Company[]

    if (!query.length) {
      results = []
    } else {
      results = COMPANIES.filter(company => company.name.toUpperCase().includes(query.toUpperCase()))
    }

    console.log(`searched`, query, results)

    this.resultsSubject.next(results);
  }
}