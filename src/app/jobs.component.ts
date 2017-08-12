import {Component, OnInit} from '@angular/core';
import {Job} from "./job";
import {JobService} from "./job.service";
import {Router} from "@angular/router";

@Component({
  selector: 'job-list',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})

export class JobsComponent implements OnInit {
  title = 'Job List';
  jobs: Job[];
  selectedJob: Job;

  constructor(private jobService: JobService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getJobs();
  }

  onSelect(job: Job): void {
    this.selectedJob = job;
  }

  getJobs(): void {
    this.jobService.getJobs().then(jobs => this.jobs = jobs);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedJob.name]);
  }
}
