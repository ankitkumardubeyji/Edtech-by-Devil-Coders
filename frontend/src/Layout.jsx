
import {Outlet} from "react-router-dom"



function Layout(){
    return(
        <>
          
             <div className="row">
            
                <Outlet/>
             </div>
        
          
        
        </>
       
    )
}

export default Layout
