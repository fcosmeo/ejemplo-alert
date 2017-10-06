import {Component, OnInit} from '@angular/core';
import {AlertCenterService} from './modules';
import {AlertType} from './modules';
import {Alert} from './modules';

@Component({
  selector: 'app-root',
  template: `
    <div class="alert-container" [style.left]="getLeft()" [style.right]="getRight()">
      <nac-alert-center [animation]="animation" [htmlTextEnabled]="htmlTextEnabled"></nac-alert-center>
    </div>
    <div>Hola</div>
    <div >
      <button class="btn btn-primary" (click)="sendAlert()">Send alert</button>
    </div>
  `,
  styles: [`
.alert-container {
  position: fixed;
  left: 60%;
  right: 0;
  z-index: 100;
  margin: 20px 20px 20px 20px;
}
` ]
})
export class AppComponent implements OnInit {
  alert: Alert = new Alert (
    AlertType.SUCCESS,
    AppComponent.createTestText(),
    AppComponent.createTestTextStrong(),
    5000
  );
  title = 'app';

  animation = 'fancy';
  align = 2;
  htmlTextEnabled = false;

  private static createTestText() {
    return 'sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex...';
  }

  private static createTestTextStrong() {
    return 'Lorem ipsum dolor ';
  }

  constructor(private alertCenterService: AlertCenterService) {
  }

  ngOnInit() {
  }
  sendAlert() {
    this.alertCenterService.alert(this.alert);
    this.alert = new Alert (
      0,
      'sssss',
      'dfdfdfdfdfdfdf',
      5000,
      true
    );
  }
  getLeft() {
    switch (this.align) {
      case 0:
        return '0';
      case 1:
        return '20%';
      case 2:
        return '60%';
    }
  }

  getRight() {
    switch (this.align) {
      case 0:
        return '60%';
      case 1:
        return '20%';
      case 2:
        return '0';
    }
  }
}
