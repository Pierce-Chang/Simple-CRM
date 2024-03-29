import { Component, OnInit, ViewChild  } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  graphWeek: Boolean = true;
  graphMonth: Boolean = false;
  graphYear: Boolean = false;
  lineChart2023: Boolean = true;
  lineChart2022: Boolean = false;
  lineChart2021: Boolean = false;
  markers: any[] = [];
  public loading = true;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  getStars(rating: number): Array<any> {
    return new Array(rating);
  }

  public lastReviews = [
    {
      "id": 1,
      "product": "Wireless Headphones",
      "rating": 5,
      "comment": "Hervorragender Klang und sehr bequem zu tragen. Akkulaufzeit ist auch super.",
      "date": "2024-03-20"
    },
    {
      "id": 2,
      "product": "Ergonomic Keyboard",
      "rating": 4,
      "comment": "Tolle Tastatur, das Tippen fühlt sich gut an. Ein Stern Abzug wegen der Beleuchtung.",
      "date": "2024-03-18"
    },
    {
      "id": 3,
      "product": "Smartwatch Fitness Tracker",
      "rating": 5,
      "comment": "Zählt Schritte genau und hat viele nützliche Funktionen. Sehr zufrieden!",
      "date": "2024-03-15"
    }
  ];
  

  // Doughnut Graph Week
  public doughnutChartLabelsWeek: string[] = [
    'Wireless Headphones',
    'Ergonomic Keyboard',
    'Smartwatch Fitness Tracker',
  ];
  public doughnutChartDatasetsWeek: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [631, 467, 280],
        label: 'Sales',
        backgroundColor: ["#00bfff3d","#ffd502","#5ede60"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsWeek: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    cutout: 95,
  };

  // Doughnut Graph Month
  public doughnutChartLabelsMonth: string[] = [
    'Wireless Headphones',
    'Ergonomic Keyboard',
    'Smartwatch Fitness Tracker',
  ];
  public doughnutChartDatasetsMonth: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [2567, 1698, 1860],
        label: 'Sales',
        backgroundColor: ["#00bfff3d","#ffd502","#5ede60"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsMonth: ChartConfiguration<'doughnut'>['options'] =
    {
      responsive: true,
      cutout: 95,
    };

  // Doughnut Graph Year
  public doughnutChartLabelsYear: string[] = [
    'Wireless Headphones',
    'Ergonomic Keyboard',
    'Smartwatch Fitness Tracker',
  ];
  public doughnutChartDatasetsYear: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [17654, 18433, 24399],
        label: 'Sales',
        backgroundColor: ["#00bfff3d","#ffd502","#5ede60"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsYear: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 95,
  };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Line Chart 2023
  public lineChartData2023: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [5836, 5787, 5950, 5960, 6129, 6190, 6028, 6280, 6320, 6280, 6340, 6500],
        label: 'Sales',
        fill: true,
        tension: 0.2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: '#00bfff3d',
        pointBackgroundColor: '#82c4ff',
        pointBorderColor: 'rgba(0,0,0,0.2)',
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
      },
    ],
  };
  public lineChartOptions2023: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  public lineChartLegend2023 = false;


  //Line Chart 2022
  public lineChartData2022: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [3855, 4258, 4177, 4379, 4355, 4555, 4760, 4555, 4256, 4367, 4670, 4871],
        label: 'Sales',
        fill: true,
        tension: 0.2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: '#00bfff3d',
        pointBackgroundColor: '#82c4ff',
        pointBorderColor: 'rgba(0,0,0,0.2)',
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
      },
    ],
  };
  public lineChartOptions2022: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  public lineChartLegend2022 = false;


  //Line Chart 2021
  public lineChartData2021: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [2330, 2143, 2555, 2764, 2855, 3255, 3360, 3665, 2956, 3767, 3880, 3971],
        label: 'Sales',
        fill: true,
        tension: 0.2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: '#00bfff3d',
        pointBackgroundColor: '#82c4ff',
        pointBorderColor: 'rgba(0,0,0,0.2)',
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
      },
    ],
  };
  public lineChartOptions2021: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  public lineChartLegend2021 = false;


  /**
   * Show the choosen graph and hide the others
   *
   */
  showGraphWeek() {
    this.graphMonth = false;
    this.graphYear = false;
    this.graphWeek = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showGraphMonth() {
    this.graphWeek = false;
    this.graphYear = false;
    this.graphMonth = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showGraphYear() {
    this.graphWeek = false;
    this.graphMonth = false;
    this.graphYear = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showLineChart2023() {
    this.lineChart2022 = false;
    this.lineChart2021 = false;
    this.lineChart2023 = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showLineChart2022() {
    this.lineChart2023 = false;
    this.lineChart2021 = false;
    this.lineChart2022 = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showLineChart2021() {
    this.lineChart2022 = false;
    this.lineChart2023 = false;
    this.lineChart2021 = true;
  }
}
