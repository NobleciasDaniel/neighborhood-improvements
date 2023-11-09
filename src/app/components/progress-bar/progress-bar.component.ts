import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges, OnDestroy, OnInit {
  @Input() progress: number = 0;
  segments: boolean[] = new Array(20).fill(false);
  blinkIndex: number | null = null;
  private intervalId: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progress']) {
      //this.updateSegments();
    }
  }

  ngOnInit(): void {
    this.animateSegments();
  }

  /*updateSegments(): void {
    const totalSegments = 20;
    const filledCount = Math.ceil((this.progress / 100) * totalSegments);
    this.segments = Array.from({ length: totalSegments }, (_, i) => i < filledCount);
  }*/

  private animateSegments() {
    const totalSegments = 20;
    let filledCount = Math.ceil((this.progress / 100) * totalSegments);
    let index = 0;

    this.intervalId = setInterval(() => {
      if (index < filledCount) {
        this.segments[index] = true;
        index++;
        if (index === filledCount) {
          this.blinkIndex = index - 1;
        }
      } else {
        clearInterval(this.intervalId);
      }
    }, 200);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
