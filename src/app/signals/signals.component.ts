import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  template: `
    {{ fullName() }} <button (click)="setName('John')">Click</button>
  `,
})
export class SignalsComponent {
  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }
}
