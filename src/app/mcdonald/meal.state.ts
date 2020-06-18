import { State, StateContext, Action } from '@ngxs/store';
import { AddMeal, StartOver } from './menu.actions';

export interface MealStateModel {
    price: number;
    orderList: string[];
}


@State<MealStateModel>({
    name: 'meal',
    defaults: {
        price: 0,
        orderList: []
    }
})
export class MealState {

    @Action(AddMeal)
    addMeal(ctx: StateContext<MealStateModel>, action: AddMeal) {
        const current = ctx.getState();

        console.log(action.payload);

        ctx.patchState({
            price: current.price + action.payload.price,
            orderList: [...current.orderList, action.payload.item]
        });

        console.log(ctx.getState());
    }

    @Action(StartOver)
    startOver(ctx: StateContext<MealStateModel>, action: StartOver) {
        ctx.setState({
            price: 0,
            orderList: []
        });
    }
}