import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GaugeService } from './gauge.service';


@Component({
  selector: 'ngx-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  private options: any;
  private echartsIntance: any;
  private _interval: any;
  private rate_color: string;

  constructor(private gauge_service: GaugeService) { 
    this.rate_color = '#08b223';
    this.options = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                restore: {show: false},
                saveAsImage: {show: false}
            }
        },
        series: [
            {
                min:0,
                max:100,
                splitNumber:10,
                radius: '90%',
                name: '设备开通率',
                type: 'gauge',
                detail: {
                    formatter:'{value}%',
                    fontSize: 18,
                    offsetCenter: [0, '85%'],

                },
                data: [{value: 99, name: ""}],
                startAngle: 245,
                endAngle: -65,

                axisLine: {            // 坐标轴线  
                    lineStyle: {       // 属性lineStyle控制线条样式  
                        // color: [[0.2, '#ed0c2c'], [0.7, '#e2f41f'], [1, '#08b223']],
                        color: [[1, this.rate_color]],
                        width: 10,
                    }  
                },

                axisLabel: {
                    //show:false,
                    // 坐标轴小标记
                    textStyle: { // 属性lineStyle控制线条样式
                        // fontWeight: 'bolder',
                        color: '#0095da', //刻度数字颜色 隐藏
                        // shadowColor: '#fff', //默认透明
                        // shadowBlur: 10
                    }
                },
                splitLine: {
                    length: 17,
                },

                axisTick: { // 坐标轴小标记
                    length: 12, // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: '#00222a', //坐标轴 小刻度线颜色
                    //     shadowColor: '#fff', //默认透明
                    //     shadowBlur: 10
                    }
                },
            }
        ]
    };
  }

  ngOnInit() {
    this._interval = setInterval(() => {
        this.gauge_service.get_open_rate().subscribe(
            (data) => {
                if (data['result']) {
                    let rate = data['result']['rate'];
                    this.options.series[0].data[0].value = rate;
                    // 根据比率修改颜色
                    rate >= 70 ? this.rate_color = '#08b223' : rate >= 30 ? 
                      this.rate_color = '#e2f41f' : this.rate_color = '#ed0c2c';
                    this.options.series[0].axisLine.lineStyle.color[0][1] = this.rate_color;
                    this.echartsIntance.setOption(this.options);
                } else {
                    console.log(`get open rate error: ${data}`);
                }
            },
            (err) => {
                console.log('network error!');
            }
        );
    }, 5000);
    
  }

  ngAfterViewInit() {
    this.resizeChart();
  }

  ngOnDestroy(): void {
      clearInterval(this._interval);
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
