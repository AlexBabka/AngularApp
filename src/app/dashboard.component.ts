import {Component, OnInit} from '@angular/core';
import {Job} from "./job";
import {JobService} from "./job.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  jobs: Job[]

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getJobs().then(jobs => this.jobs = jobs.slice(1, 3));
  }
}
