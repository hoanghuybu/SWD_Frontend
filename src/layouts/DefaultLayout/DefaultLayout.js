import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Sidebar></Sidebar>
            <div className="container">
                <Header></Header>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;