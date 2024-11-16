import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaralunoComponent } from './visualizaraluno.component';

describe('VisualizaralunoComponent', () => {
  let component: VisualizaralunoComponent;
  let fixture: ComponentFixture<VisualizaralunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizaralunoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VisualizaralunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
