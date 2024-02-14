// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import { Navigate, Outlet } from "react-router-dom";

// const Protected = (props) => {
//     const { Component } = props;
//     const navigate = useNavigate();

//     useEffect(() => {
//         let login = localStorage.getItem('login');
//         console.log(login,'GouravLogin');
//         if (!login) {
//             navigate("/login");
//         }
//     }, []);

//     return (
//         <div>
//             {/* {login === true ? <Component /> : (<>ja phele login kar</>) } */}
//             <Component />
//         </div>
//     );
// };

// export default Protected;



const Protected = ({children}) => {
   let isAuthenticated = true;
if(!isAuthenticated)
{
    return <Navigate to={"/login"}/>;
}

  

    return children ? children : <Outlet />
};

export default Protected;

