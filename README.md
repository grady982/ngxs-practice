# NgxsPractice
`bootstrap` `angular material` `ngxs`

# NGXS 
state management library 有利於複雜的狀態處理

## Store
> The store is a global state manager that dispatches actions your state containers listen to and provides a way to select data slices out from the global state.

Store 是全域的狀態管理容器，可以指派監聽的事件 `store.dispatch(action)`，並且可以提供取得資料的方式從全域的狀態中 `store.select(state => path)` 

## State
> States are classes that define a state container.

State 是一個 Class，他必須定義在狀態管理容器中。
```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      UserState,
      RouterState
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Action
> Actions can either be thought of as a command which should trigger something to happen, or as the resulting event of something that has already happened.
Each action contains a type field which is their unique identifier.
 
Action 可以思考為一個用來觸發某個事件的指令， 或者作為已經發生的事情的結果事件。
每個 Action 都包含了 type 欄位，而 type 是作為識別用的 
```
export class SetUserName {
    static readonly type = '[app] set user name';
    constructor(public payload: string) {}
}
```
 
## Select 
> Selects are functions that slice a specific portion of state from the global state container.
In CQRS and Redux patterns, we keep READ and WRITE separated. This pattern also exists in NGXS. When we want to read data out of our store, we use a select operator to retrieve this data.
In NGXS, there are two methods to select state, we can either call the select method on the Store service or use the @Select decorator. 

Select 是一個方法可以從全域的狀態管理容器中取得特定部份的 State，
1. CQRS 命令與查詢責任分離模式
2. Redux A Predictable State Container for JS Apps
這種 pattern 也存在於 NGXS 當我們要從 store 讀取資料時，我們可以透過 select 這個 operator 來取得資料
在 NGXS 中有兩種取得狀態的方法
```
@Select(ZooState) animals$: Observable<string[]>;

this.animals$ = this.store.select(state => state.zoo.animals);
```


# 參考文件
[NGXS GitBook](https://www.ngxs.io/)

[NGXS - Angular State Management](https://www.youtube.com/watch?v=SGj11j4hxmg)
