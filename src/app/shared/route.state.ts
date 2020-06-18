import { State, Action, StateContext } from '@ngxs/store';
import { Router } from '@angular/router';

export class Navigate {
    static readonly type = '[router] navigate';
    constructor(public payload: string) {}
}


@State<string>({
    name: 'router',
    defaults: ''
})
export class RouterState {

    constructor(
        private router: Router
    ) {}

    @Action(Navigate)
    async changeRoute(ctx: StateContext<string>, acttion: Navigate) {
        console.log('navigate route path');
        await this.router.navigate([acttion.payload]);
        ctx.setState(acttion.payload);
        
    }
}