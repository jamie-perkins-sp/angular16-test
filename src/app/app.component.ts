import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular16-test';

  subject = new Subject();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.subject.pipe(takeUntilDestroyed()).subscribe(console.log);
    const doc = document.documentElement;
    doc.style.setProperty('--bs-primary-rgb', '255, 193, 7');
    doc.style.setProperty('--bs-secondary-rgb', '0, 123, 255');
  }
}
