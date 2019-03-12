import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss'],
})
export class AuthHomeComponent implements OnInit {

  constructor (private router: Router,
               private navController: NavController,
  ) { }

  ngOnInit () {}

  withEmail () {
    this.navController.navigateForward('/auth/login');
  }
}
