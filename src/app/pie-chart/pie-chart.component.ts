import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  constructor() {}

  @Input() data: [{ name: string; value: number }];
  view: any[] = [700, 400];

  ngOnInit() {}
}
