import {Component, Input, OnInit} from '@angular/core';
import {Job} from "./job";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {JobService} from "./job.service";
import 'rxjs/add/operator/switchMap'
import {Location} from '@angular/common';

@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})

export class JobDetailComponent implements OnInit {
  @Input() job: Job;

  constructor(private jobService: JobService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.jobService.getJob(params.get('name')))
      .subscribe(job => this.job = job);
  }

  goBack(): void {
    this.location.back();
  }
}
