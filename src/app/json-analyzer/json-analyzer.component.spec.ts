import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAnalyzerComponent } from './json-analyzer.component';

describe('JsonAnalyzerComponent', () => {
  let component: JsonAnalyzerComponent;
  let fixture: ComponentFixture<JsonAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonAnalyzerComponent]
    });
    fixture = TestBed.createComponent(JsonAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
