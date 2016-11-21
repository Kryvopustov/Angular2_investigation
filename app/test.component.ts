import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'test',
  template: '<h1>Test</h1><button (click)="testFunc()"></button>'
})

export class TestComponent implements OnInit{
  @Input() testHero: Hero;
  @Output() testEvent: EventEmitter<Hero> = new EventEmitter<Hero>();

  ngOnInit():void {
    console.log(this);
  }

  testFunc(): void {
    this.testEvent.emit(this.testHero);
  }
}