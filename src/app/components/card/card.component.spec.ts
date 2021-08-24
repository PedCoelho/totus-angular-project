import { Company } from './../../interfaces/company.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  const testBedConfiguration = {
    imports: [
      BrowserAnimationsModule,
      RouterTestingModule.withRoutes([]),
    ],
  }

  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let expectedCompany: Company

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent], ...testBedConfiguration
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    // mock the company supplied by the parent component
    expectedCompany = { id: 42, name: 'Test Name', logo: '', url: '', description: '' };

    // simulate the parent setting the input property with that company
    component.company = expectedCompany;

    // trigger initial data binding
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
