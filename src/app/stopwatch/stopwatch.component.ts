import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  timer: number = 0;
  interval: any;

  start() {
    this.interval = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  reset() {
    this.timer = 0;
    clearInterval(this.interval);
  }

  ngOnInit() {}
}
