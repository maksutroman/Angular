import { HttpClient } from '@angular/common/http';
import { EventService } from '../events/event.service';
import { Injectable } from '@angular/core';
import { Event } from '../events/event-model';

@Injectable()
export class StorageService {
  constructor(private eventService: EventService, private http: HttpClient) {}
  URL = 'https://eventsheduler-d8872.firebaseio.com/events.json';

  storeEvents() {
    const events = this.eventService.getEvents();
    return this.http
      .put(this.URL, events)
      .subscribe((responce) => console.log(responce));
  }

  async getEvents() {
    await this.http
      .get<Event[]>(this.URL)
      .toPromise()
      .then(async (responce) => {
        console.log(responce);
        await this.eventService.onAddEvents(responce);
      });
  }
  onAddEvent(newEvent: Event) {
    this.eventService.onAddEvent(newEvent);
    this.storeEvents();
  }
  deleteItem(index: number) {
    this.eventService.DeleteEvent(index);
    this.storeEvents();
  }
  updateEvents(index: number, newReq: Event) {
    this.eventService.updateEvents(index, newReq);
    this.storeEvents();
  }
}
