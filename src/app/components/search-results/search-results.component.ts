import { Component, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  results: Company[] = [
    {
      id: 1,
      name: 'Golden Tulip',
      logo: '/assets/golden-tulip-vector-logo.svg',
      description: 'Os hotéis Golden Tulip oferecem uma perspectiva divertida da vida, do trabalho e das viagens. Alinhados aos comportamentos dos clientes que viajam a trabalho, nossos hotéis incentivam os hóspedes a unir trabalho e lazer permitindo-lhes viver e compartilhar experiências exclusivas e divertidas.',
      url: '',
    }, {
      id: 2,
      name: 'TOTVS',
      logo: '/assets/totvs-icon.svg',
      description: 'Totvs (pronuncia-se tótus) é uma empresa brasileira de software, com sede em São Paulo. A Totvs foi inicialmente formada a partir da fusão das empresas Microsiga e Logocenter. Após a abertura de capital na BOVESPA, em 08/mar/2006,[4] a empresa incorporou seus principais concorrentes nacionais — a RM Sistemas, ainda em 2006, e a Datasul, em 2008.z',
      url: '',
    }
  ]
  // results: Company[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
