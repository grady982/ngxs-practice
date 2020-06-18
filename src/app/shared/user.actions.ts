export class SetUserName {
    static readonly type = '[app] set user name';
    constructor(public payload: string) {}
}