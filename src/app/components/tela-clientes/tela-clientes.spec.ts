import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaClientes } from './tela-clientes';

describe('TelaClientes', () => {
  let component: TelaClientes;
  let fixture: ComponentFixture<TelaClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
