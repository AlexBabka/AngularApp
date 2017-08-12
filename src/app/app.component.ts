import {Component} from '@angular/core';
import {JobService} from "./jobs/job.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JobService]
})

export class AppComponent {
  title = 'Job List';
}
