import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestListComponent } from './labtest-list.component';

describe('LabtestListComponent', () => {
  let component: LabtestListComponent;
  let fixture: ComponentFixture<LabtestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
