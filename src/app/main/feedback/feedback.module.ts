import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';


@NgModule({
  declarations: [FeedbackComponent, FeedbackListComponent, FeedbackFormComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
