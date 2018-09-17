import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.scss']
})
export class RealTimeComponent implements OnInit {

  private data: any;

  constructor() { 
    this.data = [
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#1', room: 'NVH', status: "开始", eid: "0812321", pm: 'jack'},
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#1', room: '动力中心', status: "结束", eid: "0812320", pm: 'parker'},
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#1', room: '试验认证', status: "开始", eid: "0812322", pm: '张三'},
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#1', room: '新能源', status: "开始", eid: "0812323", pm: "李四"},

    ]
  }

  ngOnInit() {
    
  }
 
}
