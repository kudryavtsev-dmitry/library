import AuthorsEditor from "../components/Admin/AuthorsEditor";
import GenresEditor from "../components/Admin/GenresEditor";
import UserList from "../components/Admin/UserList";
import AllOrders from "../components/AllOrders";
import BookList from "../components/BookList";
import Cart from "../components/Cart";
import Orders from "../components/Orders";



export const routeArr = [
    {
        path: '/users',
        component: UserList,
        roles: [1],
    },
    {
        path: '/all-orders',
        component: AllOrders,
        roles: [1, 2],
    },
    {
        path: '/authors-editor',
        component: AuthorsEditor,
        roles: [1, 3],
    },
    {
        path: '/genres-editor',
        component: GenresEditor,
        roles: [1, 3],
    },
    {
        path: '/books',
        component: BookList,
        roles: [1, 2, 3, 4],
    },
    {
        path: '/cart',
        component: Cart,
        roles: [1,2,3,4],
    },
    {
        path: '/orders',
        component: Orders,
        roles: [1,2,3,4],
    },
]