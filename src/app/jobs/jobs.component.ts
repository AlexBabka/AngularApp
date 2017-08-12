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
  jobCache: Job[];
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
    this.jobService.getJobs().then(jobs => {
      this.jobs = jobs;
      this.jobCache = [...jobs];
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.jobCache.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.jobs = temp;
  }

  pauseJob(name) {
    const job = this.jobs.find(job => job.name == name);
    job.state = 'Paused';
  }

  resumeJob(name) {
    const job = this.jobs.find(job => job.name == name);
    job.state = 'Active';
  }
}
