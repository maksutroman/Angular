import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from '../app/events/events.component';
import { RequirementsListComponent } from '../app/requirements-list/requirements-list.component';
import { EventDetailComponent } from '../app/events/event-detail/event-detail.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { Page404Component } from './events/page404/page404.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: '', component: EventStartComponent },
      { path: 'new', component: EventEditComponent },
      {
        path: ':id',
        component: EventDetailComponent,
      },
      {
        path: ':id/edit',
        component: EventEditComponent,
      },
    ],
  },
  { path: 'requirements', component: RequirementsListComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
