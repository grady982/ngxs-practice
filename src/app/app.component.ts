import { Component } from '@angular/core';
import { UserState } from './shared/user.state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { SetUserName } from './shared/user.actions';
import { Navigate } from './shared/route.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-practice';
  userName: string;
  state$: Observable<UserState>;

  constructor(
    private store: Store
  ) {
    this.state$ = this.store.select(state => state);
  }

  addUser(userName: string) {
    this.store.dispatch([
      new SetUserName(userName),
      new Navigate('mcdonald/order')
    ]);
  }

}
