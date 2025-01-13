import { Outlet } from "react-router-dom";
import Sidebar from "../fragments/sidebar/Sidebar";

function DefaultLayout() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default DefaultLayout