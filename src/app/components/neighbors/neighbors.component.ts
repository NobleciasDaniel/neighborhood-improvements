import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neighbors',
  templateUrl: './neighbors.component.html',
  styleUrls: ['./neighbors.component.scss']
})
export class NeighborsComponent {
  @Input() neighbors: any[] = [];
}
