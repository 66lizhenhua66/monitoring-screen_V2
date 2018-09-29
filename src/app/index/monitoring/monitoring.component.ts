import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { All_Rooms } from '../new-map/mock-roomstatus';
import { ImageAnimation } from '../constans';

@Component({
  selector: 'ngx-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
  animations: [ImageAnimation],
})
export class MonitoringComponent implements OnInit {
  private all_rooms: any;
  private selected_room: any;
  private array_1: Array<any>;
  private array_2: Array<any>;
  
  private expandState: string;
  private _interval: any;


  constructor(private router: Router) { }

  ngOnInit() {
    this.all_rooms = All_Rooms;
    this.selected_room = this.all_rooms[0];
    this.initArray();
    this.expandState = 'show-1th';
    this._interval = setInterval(() => {
      if ( this.expandState === 'show-1th') {
        this.expandState = 'show-2th';
      } else if ( this.expandState === 'show-2th' ) {
        this.expandState = 'show-3th';
      } else {
        this.expandState = 'show-1th';
      }
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this._interval);
  }

  initArray(): void {
    this.array_1 = [];
    this.array_2 = [];
    for(let i=0; i<11; i++) {
      this.array_1.push(0);
      this.array_2.push(0);
    }
    for(let i=0; i<this.selected_room.device_status.length; i++) {
      if ( i >= 11) {
        this.array_2[i-11] = this.selected_room.device_status[i];
      } else {
        this.array_1[i] = this.selected_room.device_status[i];
      }
    }
  }

  toDevice(device: any): void {
    if ( device.device_name == "台架-2#") {
      // console.log(device);
      window.location.href = "http://168.168.3.44:3000/d/Y4cSpGFi2/xy-jq-02?orgId=1&refresh=1s&from=now-24h&to=now"
    }

  }

  toWelcome(): void {
    this.router.navigateByUrl('/index/welcome');
  }

  clickRoom(event: any): void {
    console.log(event);
    this.selected_room = event;
    this.initArray();
    // console.log(event);
  }

}
