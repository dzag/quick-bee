import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  emailControl = new FormControl('john.doe@gmail.com');
  passwordControl = new FormControl('123456');

  constructor (private router: Router,
  ) { }

  ngOnInit () {}

  signIn () {
    timer(500).subscribe(() => {
      localStorage.setItem('token', '__TOKEN__');
      this.router.navigate(['/app/explore']);
    });
  }
}
