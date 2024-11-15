import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaralunosComponent } from './listaralunos.component';

describe('ListaralunosComponent', () => {
  let component: ListaralunosComponent;
  let fixture: ComponentFixture<ListaralunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaralunosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListaralunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
