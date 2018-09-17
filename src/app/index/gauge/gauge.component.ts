import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'ngx-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  private options: any;
  private echartsIntance: any;

  constructor() { 
    this.options = {
      // backgroundColor: '#1b1b1b',
      tooltip : {
          formatter: "{a} <br/>{c} {b}"
      },
      toolbox: {
          show : false,
          // feature : {
          //     mark : {show: true},
          //     restore : {show: true},
          //     saveAsImage : {show: true}
          // }
      },
      series : [
          {
              name:'速度',
              type:'gauge',
              min:0,
              max:100,
              splitNumber:10,
              radius: '95%',
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: [[0.5, 'red'],[0.7, '#1e90ff'],[1, 'green']],
                      width: 3,
                      shadowColor : '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              axisLabel: {            // 坐标轴小标记
                  textStyle: {       // 属性lineStyle控制线条样式
                      fontWeight: 'bolder',
                      color: '#fff',
                      shadowColor : '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
              axisTick: {            // 坐标轴小标记
                  length :15,        // 属性length控制线长
                  lineStyle: {       // 属性lineStyle控制线条样式
                      color: 'auto',
                      shadowColor : '#fff', //默认透明
                      shadowBlur: 10,
                  }
              },
              splitLine: {           // 分隔线
                  length :25,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                      width:3,
                      color: '#fff',
                      shadowColor : '#fff', //默认透明
                      shadowBlur: 10
                  }
              },
             
              pointer: {           // 分隔线
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 5
              },
              title : {
                // text: '设备开通率',

                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
              },
              detail : {
                formatter: '{value} %',
                backgroundColor: 'rgba(30,144,255,0.8)',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
              },
              data:[{value: 40, name: '%'}]
          },
         
      ]
    };
  }

  ngOnInit() {
    setInterval(() => {
      this.options.series[0].data[0].value = (Math.random() * 100).toFixed(0);
      this.echartsIntance.setOption(this.options);
    }, 2000)
  }

  formatterGuage(value: any): any {
    return value + "%";

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
