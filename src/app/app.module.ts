import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ChartComponent } from './chart/chart.component';
import { TitleComponent } from './title/title.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, ChartComponent, TitleComponent, BarChartComponent, NavigationComponent, PieChartComponent],
  imports: [BrowserModule, NgxChartsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
