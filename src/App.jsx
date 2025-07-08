import React, { useEffect } from "react";
import Header from "./Header";
import AppBody from "./AppBody";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


const App = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="h-full overflow-x-scroll bg-[#f4f2ee]">
        <Header />
      <div className="mx-auto pt-[55px]">

        {!user ? <Login /> : <AppBody/>}

      </div>
    </div>
  );
};

export default App;
