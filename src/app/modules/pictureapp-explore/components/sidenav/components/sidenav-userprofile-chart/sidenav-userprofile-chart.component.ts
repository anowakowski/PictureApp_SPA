import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-userprofile-chart',
  templateUrl: './sidenav-userprofile-chart.component.html',
  styleUrls: ['./sidenav-userprofile-chart.component.scss']
})
export class SidenavUserprofileChartComponent implements OnInit {

  constructor() { }

  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Photos'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'New followers'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Your likes'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartColors: Array<any> = [
    { // photos
      backgroundColor: 'rgba(102,0,204,0.2)',
      borderColor: 'rgba(102,0,204, 1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // new followers
      backgroundColor: 'rgba(255,153,0,0.2)',
      borderColor: 'rgba(255,153,0,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(255,51,102,0.2)',
      borderColor: 'rgba(255,51,102,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  ngOnInit() { }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
