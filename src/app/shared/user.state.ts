import { State, Action, StateContext } from '@ngxs/store';
import { SetUserName } from './user.actions';

export interface UserStateModel {
    OrderID: number;
    UserName: string;
}

@State<UserStateModel>({
    name: 'user',
    defaults: {
        OrderID: Math.floor(Math.random() * 10000),
        UserName: ''
    }
})
export class UserState {
    constructor() {}

    @Action(SetUserName)
    setUserName(ctx: StateContext<UserStateModel>, action: SetUserName) {
        ctx.patchState({ UserName: action.payload});
    }
}