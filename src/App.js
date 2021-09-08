import { createContext, useState } from 'react'
import firebase from 'firebase'
import { useEffect } from 'react'
import Home from './Page/Home'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './Authentication/PriveteRoute'
import NewsPage from './Page/NewsPage'
import AdminPage from './Page/Adminpage'
import SignIn from './Authentication/Signin'
import SignUp from './Authentication/Signup'


export const UserContext = createContext(null)

function App() {
  const generateToken = () => {
    const User = firebase.auth().currentUser
    console.log(User.email)
    User.getIdToken(false).then(token => {
        sessionStorage.setItem("token", token);
        localStorage.setItem("token", token);
    })
}
const [logInUser,setLogInUser] = useState({});
const handleAfterSignInOutResponse = async (user) => {
  if (user) {
      // IF Found User Data means Authenticated 
      console.log(user.displayName)
      setLogInUser(user);
      generateToken()
  } else {
      // User is signed out
      setLogInUser({});
  }
}
useEffect(() => {
  // onAuthStateChanged will executed in login and logout
  const unsubscribe = firebase.auth().onAuthStateChanged (handleAfterSignInOutResponse);
  // unsubscribe when unmounting the component
  return unsubscribe;
  // eslint-disable-next-line
}, []);
  return (
    <UserContext.Provider value={[logInUser,setLogInUser]}>
      <h1>email: {logInUser.email}</h1>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
         <SignIn></SignIn>
       </Route>
       <Route exact path="/signup">
         <SignUp/>
       </Route>
        <PrivateRoute>
          <NewsPage></NewsPage>
        </PrivateRoute>
        <PrivateRoute>
          <AdminPage></AdminPage>
        </PrivateRoute>
      </Switch>
      </Router>
     </UserContext.Provider>
  );
}

export default App;
