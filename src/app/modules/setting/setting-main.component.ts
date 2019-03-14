import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.component.html',
  styleUrls: ['./setting-main.component.scss'],
})
export class SettingMainComponent implements OnInit {

  constructor (private router: Router,
               private navController: NavController,
  ) { }

  ngOnInit () {}

  logout () {
    localStorage.removeItem('token');
    this.navController.navigateRoot('/auth');
  }
}
