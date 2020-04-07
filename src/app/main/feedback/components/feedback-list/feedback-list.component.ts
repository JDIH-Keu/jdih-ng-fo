import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../../shared/services/feedback.service';
import { Feedback } from '../../../../shared/models/feedback';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})

export class FeedbackListComponent implements OnInit {

  FeedbackData: Feedback[];

  constructor(private feedbackService: FeedbackService) {
 }


  ngOnInit(): void {
        // Get Feedback Data
        this.feedbackService.getAll().subscribe(result => {
          this.FeedbackData = result;
        },
          err => {
            this.feedbackService.getDefault().subscribe(result => {
              this.FeedbackData = result;
            });
          }
        );
  }

  getGravatarURL(email: string): string {
    const md5 = new Md5();
    return `https://www.gravatar.com/avatar/ ${md5.appendStr(email.toLowerCase()).end()}`;
  }

}
