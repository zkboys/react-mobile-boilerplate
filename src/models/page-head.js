export default {
    initialState: {
        breadcrumbs: [], // 面包屑数据
        title: '',
        show: true,
    },
    ar: { // action reducer 合并写法，如果一个action 只对应一个reducer，这种写法可以有效减少代码量
        // action 数据不需要特殊处理，会直接传递给 reducer的action.payload
        setBreadcrumbs: (state, {payload}) => ({...state, breadcrumbs: payload}),
        appendBreadcrumbs: (state, {payload}) => {
            let {breadcrumbs = []} = state;
            breadcrumbs = breadcrumbs.concat(payload);
            return {...state, breadcrumbs};
        },
        setTitle: (state, {payload}) => ({...state, title: payload}),
        show: (state) => ({...state, show: true}),
        hide: (state) => ({...state, show: false}),
    },
}
