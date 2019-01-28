import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data: [{ name: string; value: number }];
  @Input() chart: string;
  @Input() foobar: string;
  view: any[] = [700, 400];

  constructor() {}

  ngOnInit() {}
}
