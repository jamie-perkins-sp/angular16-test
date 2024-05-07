import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyPlaygroundComponent } from './tiny-playground.component';

describe('TinyPlaygroundComponent', () => {
  let component: TinyPlaygroundComponent;
  let fixture: ComponentFixture<TinyPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinyPlaygroundComponent]
    });
    fixture = TestBed.createComponent(TinyPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
