import { Component, EventEmitter, Input, OnDestroy, Output, ChangeDetectorRef } from '@angular/core';
import { Room, RoomStatus } from './room';
import { MapService } from './map.service';
import { All_Rooms } from './mock-roomstatus';

import * as L from 'leaflet';


@Component({
  selector: 'ngx-map',
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html',
})
export class MapComponent implements OnDestroy {

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

  icon_room: L.Icon;
  icon_door: L.Icon;


  constructor(private map_service: MapService, private cd: ChangeDetectorRef) {
    this.icon_room = new L.Icon({
      iconUrl: '/assets/images/point-room4.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
    this.icon_door = new L.Icon({
      iconUrl: '/assets/images/point-door.png',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
    // let marker1 = new L.Marker([4, -13], {
    //       title: "动力中心", 
    //       alt: "化龙基地",
    //       icon: this.icon_room,
    //     })
    // marker1.on('click', this.choise_room);  // create and bind function
    this.layers = [
      L.imageOverlay('/assets/images/map-9.png', [[-25, -40], [25, 40]]),
      L.marker([3, -14.5], {
        title: "动力中心", 
        alt: "power",
        icon: this.icon_room,
      }).on('click', (ev) => {
        this.selected_room = this.all_rooms[0];
        console.log('chuanti');
        this.selected.emit(this.selected_room);
        console.log('chuanti');
      }).bindTooltip(this.get_room_str('动力中心')).openTooltip(),
      L.marker([1.7, -12.1], {
        title: "新能源", 
        alt: "new_power",
        icon: this.icon_room,
      }).on('click', (ev) => {
        this.selected_room = this.all_rooms[1]
      }).bindTooltip(this.get_room_str('新能源')).openTooltip(),
      L.marker([5, -10], {
        title: "试验认证", 
        alt: "experiment",
        icon: this.icon_room,
      }).on('click', (ev) => {
        this.selected_room = this.all_rooms[2]
      }).bindTooltip(this.get_room_str('试验认证')).openTooltip(),
      L.marker([4, -5.5], {
        title: "NVH", 
        alt: "nvh",
        icon: this.icon_room,
      }).on('click', (ev) => {
        this.selected_room = this.all_rooms[3]
      }).bindTooltip(this.get_room_str('NVH')).openTooltip(),
      L.marker([6, -23], {
        title: "西北门", 
        alt: "化龙基地",
        icon: this.icon_door,
      }).bindTooltip(this.get_door_str('西北门')).openTooltip(),
      L.marker([18, 2], {
        title: "正门", 
        alt: "化龙基地",
        icon: this.icon_door,
      }).bindTooltip(this.get_door_str('正门')).openTooltip(),
      L.marker([10.5, 17.5], {
        title: "东门", 
        alt: "化龙基地",
        icon: this.icon_door,
      }).bindTooltip(this.get_door_str('东门')).openTooltip(),
      L.marker([-11, 29], {
        title: "南门", 
        alt: "化龙基地",
        icon: this.icon_door,
      }).bindTooltip(this.get_door_str('南门')).openTooltip(),
      L.polygon([[1.4, -15.5], [3, -12.5], [4.5, -13.5], [2.9, -16.5]], {
        color: '#fff',
        weight: 1,
        // stroke: false,
        fillColor: '#07f629',
      }),

    ];

    this.all_rooms = All_Rooms;
    this.selected_room = this.all_rooms[0];
    this.selected.emit(this.selected_room);

  }

  mapReady(map: L.Map) {
    map.addControl(L.control.zoom({position: 'bottomright'}));

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
    console.log('destroy');
    this.alive = false;
  }

}

