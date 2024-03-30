import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ReviewService } from '../services/review.service';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(public reviewService: ReviewService) {}

  public customerReviewChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {},
      y: {
        min: 0,
        max: 5,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public customerReviewChartData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [4.8, 4.2, 4.9, 4.7],
        label: 'Customer Satisfaction',
        backgroundColor: 'rgba(255, 215, 0, 0.6)',
        borderColor: 'rgb(255, 215, 0)'
      },
    ],
  };
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  
}
