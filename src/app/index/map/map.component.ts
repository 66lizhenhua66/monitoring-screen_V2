import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Room } from './room';

import * as L from 'leaflet';


@Component({
  selector: 'ngx-map',
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html',
})
export class MapComponent implements OnDestroy {

  private rooms: Array<Room>;  // 各实验室的信息
  private selected_room: Room;  // 当前选择的实验室

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


  constructor() {
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
      L.imageOverlay('/assets/images/map-8.png', [[-25, -40], [25, 40]]),
      L.marker([4, -13], {
        title: "动力中心", 
        alt: "power",
        icon: this.icon_room,
      }).on('click', (ev) => {
        this.selected_room = this.rooms[0]
      }),
      L.marker([1.7, -12.1], {
        title: "新能源", 
        alt: "new_power",
        icon: this.icon_room,
      }).on('click', (ev) => {
        this.selected_room = this.rooms[1]
      }),
      L.marker([5, -10], {
        title: "试验认证", 
        alt: "experiment",
        icon: this.icon_room,
      }).on('click', (ev) => {
        this.selected_room = this.rooms[2]
      }),
      L.marker([4, -5.5], {
        title: "NVH", 
        alt: "nvh",
        icon: this.icon_room,
      }).on('click', (ev) => {
        this.selected_room = this.rooms[3]
      }),
      L.marker([6, -23], {
        title: "西北门", 
        alt: "化龙基地",
        icon: this.icon_door,
      }),
      L.marker([18, 2], {
        title: "正门", 
        alt: "化龙基地",
        icon: this.icon_door,
      }),
      L.marker([10.5, 17.5], {
        title: "东门", 
        alt: "化龙基地",
        icon: this.icon_door,
      }),
      L.marker([-11, 29], {
        title: "南门", 
        alt: "化龙基地",
        icon: this.icon_door,
      }),

    ];

    this.rooms = [
      {title: "动力中心", run_devices: "28", total_devices: "35", total_person: "45"},
      {title: "新能源", run_devices: "18", total_devices: "26", total_person: "24"},
      {title: "试验认证", run_devices: "26", total_devices: "33", total_person: "29"},
      {title: "NVH", run_devices: "12", total_devices: "23", total_person: "23"},
    ];
    this.selected_room = this.rooms[0];

  }

  mapReady(map: L.Map) {
    map.addControl(L.control.zoom({position: 'bottomright'}));

    // fix the map fully displaying, existing leaflet bag
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }


  ngOnDestroy(): void {
    this.alive = false;
  }

}

