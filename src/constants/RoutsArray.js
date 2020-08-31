import BooksEditor from "..//components/Admin/BooksEditor/BooksEditor";
import AuthorsEditor from "../components/Admin/AuthorsEditor/AuthorsEditor";
import GenresEditor from "../components/Admin/GenresEditor/GenresEditor";
import UserList from "../components/Admin/UserList/UserList";
import AllOrders from "../components/AllOrders/AllOrders";
import BookList from "../components/BookList/BookList";
import Cart from "../components/Cart/Cart";
import Orders from "../components/Orders/Orders";



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
        path: '/books-editor',
        component: BooksEditor,
        roles: [1, 3],
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
        roles: [4],
    },
    {
        path: '/cart',
        component: Cart,
        roles: [4],
    },
    {
        path: '/orders',
        component: Orders,
        roles: [4],
    },
]