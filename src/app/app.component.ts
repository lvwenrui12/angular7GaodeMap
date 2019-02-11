import { Component, OnInit } from '@angular/core';
declare var AMap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularDemo';

  constructor() { }
  ngOnInit() {
    this.getMap();
  }
  // 地图要放到函数里。
  getMap() {
    let map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [116.397428, 39.90923]
    });
  }

}
