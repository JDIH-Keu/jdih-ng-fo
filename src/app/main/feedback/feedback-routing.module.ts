import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackComponent } from './feedback.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

const routes: Routes = [{
  path: '', component: FeedbackComponent,
  children: [
    { path: '', redirectTo: 'form' },
    { path: 'list', component: FeedbackListComponent },
    { path: 'form', component: FeedbackFormComponent }]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class FeedbackRoutingModule { }
