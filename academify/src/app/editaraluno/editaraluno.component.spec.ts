import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaralunoComponent } from './editaraluno.component';

describe('EditaralunoComponent', () => {
  let component: EditaralunoComponent;
  let fixture: ComponentFixture<EditaralunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditaralunoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditaralunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
