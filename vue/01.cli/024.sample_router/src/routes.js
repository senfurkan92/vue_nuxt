import Home from './comps/Home'
import Header from './comps/layout/Header'

const Users = resolve => {
    require.ensure(["./comps/user/Users.vue"], () => {
        resolve(require("./comps/user/Users.vue"))
    })
}

const UsersStart = resolve => {
    require.ensure(["./comps/user/UsersStart.vue"], () => {
        resolve(require("./comps/user/UsersStart.vue"))
    }, "Users")
}

const UsersEdit = resolve => {
    require.ensure(["./comps/user/UsersEdit.vue"], () => {
        resolve(require("./comps/user/UsersEdit.vue"))
    }, "Users")
}

const UsersDetail = resolve => {
    require.ensure(["./comps/user/UsersDetail.vue"], () => {
        resolve(require("./comps/user/UsersDetail.vue"))
    }, "Users" )
}

// export const routes = [
//     {path : '/', component : Home, name: 'home'},
//     {
//         path : '/users', component : Users, name : 'users', children:[
//             {path : '', component : UsersStart},
//             {path : ':id', component : UsersDetail},
//             {path : ':id/edit', component : UsersEdit, name: 'userEdit'},
//         ]
//     }
// ];

export const routes = [
    {path:"/", name:"home", components:{
            default:Home,
            "header-top": Header,
        }
    },
    {path:"/users", name:"users", components:{
            default: Users,
            "header-bottom": Header
        },
        children:[
            {path:"", component:UsersStart, name:"userStart"},
            {path:":id", component:UsersDetail, name:"userDetail", beforeEnter: (to,from,next) => {
                console.log("Route seviyesinde kontrol")
                next();
            }},
            {path:":id/edit", component:UsersEdit, name:"userEdit"},
    ]},
    {path:"/redirect", redirect: "/users"},
    {path:"*", redirect:"/"}
];