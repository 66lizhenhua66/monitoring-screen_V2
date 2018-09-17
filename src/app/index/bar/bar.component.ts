import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  private options: any;
  private echartsIntance: any;

  constructor() { 
    this.options = {
      title: {
        text: "月实验计划",
        textStyle: {
          color: '#69c4fe',
          fontWeight: 'bold',
          fontSize: 22,
        }
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              crossStyle: {
                  color: '#69c4fe'
              }
          }
      },
      toolbox: {
        iconStyle: {
          color: '#0288f6',
          borderColor: '#0288f6',
        },
        feature: {
            dataView: {show: false, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: false}
        }
      },
      legend: {
        textStyle: {
          color: 'green',
        },
        top: 20,
        data:[
          {
            name: "月完成的实验",
            textStyle: {
              color: '#69c4fe',
            }
          },
          {
            name: "月计划的实验",
            textStyle: {
              color: '#69c4fe',
            }
          },

        ]
      },
      xAxis: [
        {
          axisLine: {
            lineStyle: {
              color: '#69c4fe'
            }

          },
          name: "2018年",
          nameLocation: 'middle',
          nameGap: 25,
          nameTextStyle: {
            color: '#69c4fe',
            fontSize: 14,
            fontWeight: 'bold',
          },
          type: 'category',
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
          axisPointer: {
              type: 'shadow'
          }
        }
      ],
      yAxis: [
          {
              type: 'value',
              name: '次/月',
              min: 0,
              max: 40,
              axisLabel: {
                  formatter: '{value}'
              },
              axisLine: {
                lineStyle: {
                  color: '#69c4fe',
                }
              },
          },

      ],
      series: [
          {
              name:'月完成的实验',
              type:'bar',
              data:[21, 22, 18, 19, 23, 24, 23, 26, 21, 21, 22, 24],
              itemStyle: {
                normal: {
                  color: '#69c4fe'
                }
              }
          },
          {
              name:'月计划的实验',
              type:'line',
              // yAxisIndex: 1,
              data:[20, 20, 20, 25, 25, 25, 26, 27, 28, 23, 22, 21],
              itemStyle: {
                normal: {
                  color: '#0bce59',
                },
              }
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
