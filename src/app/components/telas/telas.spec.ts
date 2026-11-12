import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Telas } from './telas';

describe('Telas', () => {
  let component: Telas;
  let fixture: ComponentFixture<Telas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Telas],
    }).compileComponents();

    fixture = TestBed.createComponent(Telas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
