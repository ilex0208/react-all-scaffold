####store
>系统store,一个应用中，就只有一个 store，store 里的 state 是共用的.官方示例`https://www.npmjs.com/package/react-router-redux`
或`https://github.com/reactjs/redux/tree/master/examples/real-world`

The goal of the React Store is to simplify the data flow in ReactJS applications.
The following diagram depicts the pattern used by the React Store.
------------------------------------------------------------------
|      ╔══════════════╗                                          |
|      ║ App ┌──────┐ ║   getData()  ╔═════════╗  HTTP GET       |
|      ║     │ View ├─╫─────────────>║  Store  ╟──────────>      |
|      ║     └──────┘ ║              ╚════╤════╝                 |
|      ╚══════════════╝<─ ─ ─ ─ ─ ─ ─ ─ ─ ┘                      |
|                           forceUpdate()                        |
------------------------------------------------------------------
