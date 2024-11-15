import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InseriralunoComponent } from './inseriraluno.component';

describe('InseriralunoComponent', () => {
  let component: InseriralunoComponent;
  let fixture: ComponentFixture<InseriralunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InseriralunoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InseriralunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
