import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() data: [{ name: string; value: number }];
  view: any[] = [700, 400];
  constructor() {}

  ngOnInit() {}
}
