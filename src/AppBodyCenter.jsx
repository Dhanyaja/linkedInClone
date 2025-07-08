import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import FeedOptions from "./FeedOptions";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import PhotoIcon from "@mui/icons-material/Photo";
import ArticleIcon from "@mui/icons-material/Article";
import Posts from "./Posts";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
// import { collection, getDocs } from 'firebase/firestore/lite';

const AppBodyCenter = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (error) {
      console.log("Error adding post:", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white p-[15px] border border-gray-300 rounded-lg">
        <div className="feed__inputContainer flex flex-col gap-5 ">
          <div className="feed__input flex gap-2 items-center ">
            <img
              src={user.photoUrl || "./user.png"}
              alt=""
              className="h-[45px] bg-gray-200 rounded-full"
            />
            <form action="" className=" flex-1">
              <input
                type="text"
                className="rounded-full border border-[#b6b6b6] text-[#313131] w-full h-full p-4 focus:outline-0 focus:bg-[#f4f2ee]"
                placeholder="Start a post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={sendPost} className="hidden">
                Send
              </button>
            </form>
          </div>
          <div className="feed__options flex items-center justify-around ">
            <FeedOptions
              Icon={SmartDisplayIcon}
              title="Video"
              color="#5f9b41"
            />
            <FeedOptions Icon={PhotoIcon} title="Photo" color="#378fe9" />
            <FeedOptions
              Icon={ArticleIcon}
              title="Write article"
              color="#e06847"
            />
          </div>
        </div>

        {/* posts */}
      </div>

      {/* posts */}
      <FlipMove>
        {posts.map((post) => (
          <Posts
            key={post.id}
            name={post.data.name}
            description={post.data.description}
            message={post.data.message}
            photoUrl={post.data.photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default AppBodyCenter;
