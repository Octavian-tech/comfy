import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
import { Navigate} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
// import { useUserContext } from '../context/user_context';

// const PrivateRoute = ({children,...rest}) => {

// // const {myUser}= useUserContext();
// const {user}= useAuth0();

//   return <Route {...rest}  render={ ()=>user? children:<Redirect to={'/'}></Redirect>}></Route>;
// };

const PrivateRoute = ({children}) => {

  // const {myUser}= useUserContext();
  const {user}= useAuth0();

  if(!user){
    return <Navigate to='/' />
  }
  return children;
    // return <Route {...rest}  render={ ()=>user? children:<Redirect to={'/'}></Redirect>}></Route>;
  };
export default PrivateRoute;
