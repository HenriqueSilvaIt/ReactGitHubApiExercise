import { Outlet } from "react-router-dom";
import HeaderGit from "../../components/HeaderGit";


export default function Home() {
    return (
        <> 
        <HeaderGit/>
        <Outlet/>
        </>
    );
}