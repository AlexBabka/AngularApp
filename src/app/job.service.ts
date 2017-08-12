import {Injectable} from '@angular/core';
import {Job} from "./job";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobService {
  private jobsUrl = 'api/jobs';  // URL to web api

  constructor(private http: Http) {
  }

  getJobs(): Promise<Job[]> {
    return this.http.get(this.jobsUrl)
      .toPromise()
      .then(response => response.json().data as Job[])
      .catch(this.handleError);
  }

  getJobsSlowly(): Promise<Job[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getJobs()), 2000);
    });
  }

  getJob(name: string): Promise<Job> {
    return this.getJobs()
      .then(jobs => jobs.find(jobs => jobs.name === name));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
