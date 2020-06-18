import { ItemRec } from './menu/menu.component';

export class AddMeal {
    static readonly type = '[mcdonald] add meal';
    constructor(public payload: ItemRec) {}
}

export class StartOver {
    static readonly type = '[mcdonald] start over';
    constructor() {}
}