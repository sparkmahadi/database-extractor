import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Output from './components/Output';
import NewApp from './components/NewApp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/profile',
        element: <Output></Output>
    },
    {
        path: '/view',
        element: <NewApp></NewApp>
    },
])

export default router;