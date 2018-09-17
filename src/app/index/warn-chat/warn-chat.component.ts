import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-warn-chat',
  templateUrl: './warn-chat.component.html',
  styleUrls: ['./warn-chat.component.scss']
})
export class WarnChatComponent implements OnInit {
  private data: any;

  constructor() { 
    this.data = [
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#1', room: 'NVH', mesg: '过载'},
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#2', room: '动力中心', mesg: '缺油'},
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#3', room: '试验认证', mesg: '过载'},
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#1', room: 'NVH', mesg: '缺油'},
      {date: (new Date()).toLocaleTimeString(), device: 'AVL#1', room: 'NVH', mesg: '缺油'},
    ]
  }

  ngOnInit() {
    
  }
}
