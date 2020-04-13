import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event-model';
import { EventService } from '../event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  event: Event;
  index: number;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.event = this.eventService.getSingleEvent(this.index);
    });
    this.eventService.eventSelected.subscribe((event: Event) => {
      this.event = event;
    });
  }
  onAddReuirements() {
    //this.eventService.AddEvent(this.event.requirements);
    this.eventService.onSendRequirements(this.event.requirements);
  }
  onEditEvent() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    this.eventService.startEdit.next(this.index);
  }
  onDelete() {
    this.storageService.deleteItem(this.index);
    this.router.navigate(['events']);
  }
}
