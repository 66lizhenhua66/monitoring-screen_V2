import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flyIn } from './constans';

@Component({
  selector: 'ngx-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [flyIn],
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  onClick(event: any): void {
    this.router.navigateByUrl('/index/welcome');
  }

}
