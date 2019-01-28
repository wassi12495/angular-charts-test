import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor() {}

  @Output() changeChart = new EventEmitter<string>();
  chart = 'none';
  ngOnInit() {}

  onChooseChart(chart) {
    this.chart = chart;
    console.log(this.chart);
    this.changeChart.emit(chart);
  }
}
