import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTaskComponent } from './additional-task.component';

describe('AdditionalTaskComponent', () => {
  let component: AdditionalTaskComponent;
  let fixture: ComponentFixture<AdditionalTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
