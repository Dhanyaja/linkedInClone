import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const user = userAuth.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login grid place-items-center ml-auto mr-auto pt-[100px] pb-[100px]">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
        alt=""
        className="object-contain h-[60px] my-[20px]"
      />
      <form action="" className="flex flex-col">
        <input
          className="w-[358px] h-[58px] text-[20px] pl-[10px] mb-[10px] rounded-md border"
          type="text"
          placeholder="Full name(required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-[358px] h-[58px] text-[20px] pl-[10px] mb-[10px] rounded-md border"
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          className="w-[358px] h-[58px] text-[20px] pl-[10px] mb-[10px] rounded-md border"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[358px] h-[58px] text-[20px] pl-[10px] mb-[10px] rounded-md border"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={loginToApp}
          className="w-[358px] h-[50px] text-lg text-[#fff] bg-[#0074b1] rounded-md"
        >
          Sign In
        </button>
      </form>

      <p className="mt-[20px]">
        Not a member?
        <span
          className="login__register text-[#0177b7] cursor-pointer"
          onClick={register}
        >
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
