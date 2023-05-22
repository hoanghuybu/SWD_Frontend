import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";

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