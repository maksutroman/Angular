import { Event } from './event-model';
import { Requirement } from '../requirements-list/requirements-model';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequirementService } from '../requirements-list/requirements.service';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
  startEdit = new Subject<number>();
  eventUpdate = new EventEmitter<Event[]>();
  eventSelected = new EventEmitter<Event>();
  URL = 'https://eventsheduler-d8872.firebaseio.com/events.json';
  constructor(
    private requirementService: RequirementService,
    private http: HttpClient
  ) {}

  private events: Event[]; /*  = [
    new Event(
      'Java Script Patterns',
      'For advanced skills students',
      'https://monsterlessons.com/api/storage/uploads/posters/9e7ad2a5-9047-4139-b25b-2ede6cec1fc8/poster.png',
      [new Requirement('Java Script', 'Java Script Druid')]
    ),
    new Event(
      'Java for true coders',
      'Java is the best programming ...',
      'https://upload.wikimedia.org/wikipedia/uk/8/85/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Java.png',
      [new Requirement('Java', 'Java  Spring')]
    ),
  ]; */

  getEvents() {
    if (this.events) return this.events.slice();
  }

  getSingleEvent(index: number) {
    return this.events[index];
  }

  AddEvent(requiremens: Requirement[]) {
    this.requirementService.AddRequirements(requiremens);
  }

  DeleteEvent(index: number) {
    this.events.splice(index, 1);
    this.eventUpdate.emit(this.events.slice());
    console.log(this.events);
  }

  onSendRequirements(requirements: Requirement[]) {
    console.log(requirements);
    this.requirementService.AddRequirements(requirements);
  }

  updateEvents(index: number, newReq: Event) {
    this.events[index] = newReq;
    this.eventUpdate.next(this.events.slice());
  }

  onAddEvent(newEvent: Event) {
    this.events.push(newEvent);
    this.eventUpdate.emit(this.events.slice());
  }

  onAddEvents(events: Event[]) {
    this.events = events;
    this.eventUpdate.emit(this.events.slice());
  }
}
