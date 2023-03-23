import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Output from './components/Output';
import Download from './components/Download';

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
        path: '/download',
        element: <Download></Download>
    },
])

export default router;