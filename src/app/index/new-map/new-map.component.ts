import { Component, EventEmitter, Input, OnDestroy, Output, NgZone } from '@angular/core';
import { Room, RoomStatus } from './room';
import { All_Rooms } from './mock-roomstatus';

import * as L from 'leaflet';


@Component({
  selector: 'ngx-new-map',
  styleUrls: ['./new-map.component.scss'],
  templateUrl: './new-map.component.html',
})
export class NewMapComponent implements OnDestroy {

  @Output() selected: EventEmitter<any> = new EventEmitter();  // 发射事件 

  private selected_room: any;  // 当前选择的实验室
  private all_rooms: Array<RoomStatus>;  // 实验室的所有状态

  layers = [];
  alive = true;

  options = {
    // crs: L.CRS.Simple,
    // minZoom: -5,
    zoom: 4,
    minZoom: 3,
    maxZoom: 6,
    zoomControl: false,
    center: [0, 0],
    maxBounds: [[-30, -45], [30, 45]],
    // maxBounds: new L.LatLngBounds(
    //   new L.LatLng(47, 100),
    //   new L.LatLng(43, 105),
    // ),
    maxBoundsViscosity: 1.0,
  };

  power_room: L.Marker;
  nvh_room: L.Marker;
  new_room: L.Marker;
  experi_room: L.Marker;
  map_room: any;
  room_2_index: any = {
    "动力中心": 0,
    "新能源": 1,
    "试验认证": 2,
    "NVH": 3,
  };

  chose_icon: L.Icon;
  no_chose_icon: L.Icon;


  constructor(private zone: NgZone) {
    this.chose_icon = new L.Icon({
      iconUrl: '/assets/images/chose_point.png',
      iconSize: [34, 44],
      iconAnchor: [15, 30],
    });
    this.no_chose_icon = new L.Icon({
      iconUrl: '/assets/images/no_chose_point.png',
      iconSize: [34, 44],
      iconAnchor: [15, 30],
    });
    this.power_room = this.createMarker("动力中心", [7, -22.5]);
    this.new_room = this.createMarker("新能源", [5.8, -18.5], "new_power");
    this.experi_room = this.createMarker("试验认证", [9.5, -15.5]);
    this.nvh_room = this.createMarker("NVH", [8, -10]);
    this.map_room = {
      "动力中心": this.power_room,
      "NVH": this.nvh_room,
      "试验认证": this.experi_room,
      "新能源": this.new_room,
    }

    this.layers = [
      L.imageOverlay('/assets/images/map-10.png', [[-25, -40], [25, 40]]),
      this.power_room,
      this.new_room,
      this.experi_room,
      this.nvh_room,

    ];

    this.all_rooms = All_Rooms;
    this.selected_room = this.all_rooms[0];
    this.power_room.setIcon(this.chose_icon);
    
    // this.selected.emit(this.selected_room);

  }

  createMarker(title: string, bound: any, alt?: string): L.Marker {
    // create a marker
    const icon_temp = ['动力中心', 'NVH', '试验认证', '新能源'];
    return L.marker(bound, {
      title: title, 
      alt: alt ? alt : 'null',
      icon: this.no_chose_icon,
    }).on('click', (ev) => {
      this.zone.run(() => {
        this.selected_room = this.all_rooms[this.room_2_index[title]]
        this.selected.emit(this.selected_room);
        for (let item of icon_temp) {
          if ( title === item ) {
            this.map_room[item].setIcon(this.chose_icon);
          } else {
            this.map_room[item].setIcon(this.no_chose_icon);
          }
        }
      });
    }).bindTooltip(this.get_room_str(title)).openTooltip();

  }
  
  mapReady(map: L.Map) {
    // map.addControl(L.control.zoom({position: 'bottomright'}));

    // fix the map fully displaying, existing leaflet bag
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }

  get_room_str(str: string): string {
    // return room rich string
    return `<span style="color:#2836e9; font-size:1.5rem; font-wegiht: bold;">${str}</span>`;
  }

  get_door_str(str: string): string {
    // return door rich string
    return `<span style="color:#2836e9; font-size:1rem; font-wegiht: bold;">${str}</span>`;
  }


  ngOnDestroy(): void {
    this.alive = false;
  }

}
