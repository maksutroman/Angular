import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Event } from '../event-model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Requirement } from 'src/app/requirements-list/requirements-model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent implements OnInit {
  @ViewChild('form') EventForm: NgForm;
  item: Event;
  index: number;
  subscription: Subscription;
  editMode = false;
  editedEvent: Event;
  src: string;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {}
  onAdd() {
    this.eventService.onSendRequirements(this.item.requirements);
  }
  ngOnInit(): void {
    console.log(this.EventForm);

    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.item = this.eventService.getSingleEvent(this.index);
    });
    this.subscription = this.eventService.startEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.index = index;
        this.EventForm.setValue({
          title: this.item.name,
          description: this.item.description,
          image: this.item.image,
        });
      }
    );
  }
  onAddItem(form: NgForm) {
    const title = form.value.name;
    const description = form.value.description;
    const image = form.value.image;

    const newEvent = new Event(title, description, image, [
      new Requirement('Some info', 'Some info'),
    ]);
    console.log(form.value);
    if (this.editMode) {
      this.storageService.updateEvents(this.index, newEvent);
    } else {
      this.storageService.onAddEvent(newEvent);
    }
    this.router.navigate(['events']);
  }
  onReset() {
    this.editMode = false;
  }
  change(form: NgForm) {
    this.src = form.value.image;
    console.log(this.src);
  }
}
