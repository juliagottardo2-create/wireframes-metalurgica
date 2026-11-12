import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoSelect } from './campo-select';

describe('CampoSelect', () => {
  let component: CampoSelect;
  let fixture: ComponentFixture<CampoSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(CampoSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
