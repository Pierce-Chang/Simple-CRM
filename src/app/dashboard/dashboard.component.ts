import { Component, ViewChild  } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 1,
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

  public customerReviewChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {},
      y: {
        min: 0, // Minimalwert auf 0 setzen, um das Diagramm auf eine Skala von 0 bis 5 zu beschränken
        max: 5, // Maximalwert auf 5 setzen für eine Bewertungsskala von 1 bis 5
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

  public barChartData: ChartData<'bar'> = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      { data: [55, 42, 60, 71, 86, 95, 85], label: 'Sales at new cars' },
      { data: [78, 38, 69, 89, 96, 67, 90], label: 'Sales at pre-owned car' },
    ],
  };

  public customerReviewChartData: ChartData<'bar'> = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [4.5, 4.3, 4.6, 4.8, 4.2, 4.9, 4.7],
        label: 'Customer Satisfaction',
        backgroundColor: 'rgba(255, 215, 0, 0.6)', // Transparentes Goldgelb
        borderColor: 'rgb(255, 215, 0)' // Solides Goldgelb
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
