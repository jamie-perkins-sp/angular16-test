import { Component } from '@angular/core';
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

  constructor() {
    this.subject.pipe(takeUntilDestroyed()).subscribe(console.log);
  }
}
