import { Company } from '../../interfaces/company.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true })
  poModal!: PoModalComponent;


  @Input() company!: Company;

  modalClose: PoModalAction = {
    action: () => {
      this.performClose();
    },
    label: 'Não',
    danger: true
  };

  modalConfirm: PoModalAction = {
    action: () => {
      this.performOk();
    },
    label: 'Sim'
  };



  constructor(private poNotification: PoNotificationService, private router: Router) {
  }


  ngOnInit(): void {
  }

  pageRedirect(url: string) {
    return
  }

  performOk() {
    setTimeout(() => {
      this.performClose();
      this.poNotification.success(`Se isso fosse uma aplicação real, você teria sido redirecionado para (${window.location.href || this.router.url}${this.company.url}) 👌`);
    }, 400);
  }

  performClose() {
    this.poModal.close()
  }

  showModal() {
    this.poModal.open();
  }

}
