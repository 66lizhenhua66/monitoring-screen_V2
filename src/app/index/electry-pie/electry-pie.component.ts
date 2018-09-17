import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-electry-pie',
  templateUrl: './electry-pie.component.html',
  styleUrls: ['./electry-pie.component.scss']
})
export class ElectryPieComponent implements OnInit {

  private options: any;
  private echartsIntance: any;

  constructor() { 
    this.options = {
      title: {
        text: "实验用电分布",
        textStyle: {
          color: '#69c4fe',
          fontSize: 22,
        }

      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          top: 30,
          x: 'left',
          data:['NVH','试验认证','动力中心','新能源'],
          textStyle: {
            color: '#69c4fe',
            fontWeight: 'bold'
          }
          
      },
      series: [
          {
              name:'用电量分布',
              type:'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              
              label: {
                  normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}\n{d}%',
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '20',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {
                    value:335, 
                    name:'NVH',
                  },
                  {value:310, name:'动力中心'},
                  {value:234, name:'试验认证'},
                  {value:135, name:'新能源'},
              ]
          }
      ]

    };
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.resizeChart();
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

}
