import { Navigate, Outlet } from "react-router-dom"

export const ProtectedR = ({isAllowed, children, redirectTo="/login"}) =>{
  {/*if (!isAllowed){
    return <Navigate to={redirectTo}/>
  }*/}
  return children ? children : <Outlet/>
}