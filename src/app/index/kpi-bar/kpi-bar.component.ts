import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-kpi-bar',
  templateUrl: './kpi-bar.component.html',
  styleUrls: ['./kpi-bar.component.scss']
})
export class KpiBarComponent implements OnInit {

  private options: any;
  private echartsIntance: any;

  constructor() { 
    this.options = {
      title: {
        text: "KPI曲线",
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
        selected: {
          "试验认证": false,
          "NVH": false,
          "动力中心": false,
          "新能源": false,
          "总KPI": true,
        },
        data:[
          {
            name: "试验认证",
            textStyle: {
              color: '#69c4fe',
            }
          },
          {
            name: "NVH",
            textStyle: {
              color: '#69c4fe',
            }
          },
          {
            name: "动力中心",
            textStyle: {
              color: '#69c4fe',
            }
          },
          {
            name: "新能源",
            textStyle: {
              color: '#69c4fe',
            }
          },
          {
            name: "总KPI",
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
          data: ['09/06','09/07','09/08','09/09','09/10','09/11','09/12','09/13','09/14','09/15','09/16','09/17'],
          axisPointer: {
              type: 'shadow'
          }
        }
      ],
      yAxis: [
          {
              type: 'value',
              name: 'KPI',
              min: 0,
              max: 100,
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
              name: '总KPI',
              type: 'line',
              data: this.getData(),
              itemStyle: {
                normal: {
                  color: '#69c4fe'
                }
              }
          },
          {
              name:'试验认证',
              type:'line',
              data: this.getData(),
              itemStyle: {
                normal: {
                  color: '#61a0a8'
                }
              }
          },
          {
              name:'新能源',
              type:'line',
              data: this.getData(),
              itemStyle: {
                normal: {
                  color: '#d48265'
                }
              }
          },
          {
              name:'NVH',
              type:'line',
              data: this.getData(),
              itemStyle: {
                normal: {
                  color: '#c23531'
                }
              }
          },
          {
              name:'动力中心',
              type:'line',
              // yAxisIndex: 1,
              data: this.getData(),
              itemStyle: {
                normal: {
                  color: '#2f4554',
                },
              }
          }
      ]
    };
  }

  ngOnInit() {
  }

  getData(): any {
    let data = [];
    for (let i=0; i<12; i++) {
      let temp = Math.random() * 100;
      if (temp < 50) {
        temp += 50;
      }
      data.push(temp.toFixed(2));
    }
    return data;
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
