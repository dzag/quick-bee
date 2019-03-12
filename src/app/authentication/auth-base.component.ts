import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '@app/authentication/login/login.component';

@Component({
  selector: 'app-auth-base',
  templateUrl: './auth-base.component.html',
  styleUrls: ['./auth-base.component.scss'],
})
export class AuthBaseComponent implements OnInit {

  private _transitions = new Map([
    [LoginComponent, { to: '/auth' }]
  ]);

  private _activatedComponent;

  constructor (private route: ActivatedRoute,
  ) { }

  ngOnInit () {
  }

  get canBack () {
    return this._transitions.has(this._activatedComponent);
  }

  get backTo () {
    if (!this._activatedComponent || !this.canBack) {
      return;
    }

    return this._transitions.get(this._activatedComponent).to;
  }

  get hideSignUp() {
    return this._activatedComponent !== LoginComponent;
  }

  onActivatedComponent (component) {
    this._activatedComponent = component.constructor;
  }
}
