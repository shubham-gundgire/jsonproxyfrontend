import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Main() {
  const [posts, setPosts] = useState("");
  const [noOfPosts, setNoOfPosts] = useState(10);
  useEffect(() => {
    async function fetchdata() {
      const data = await axios(
        "https://agile-garden-93480.herokuapp.com/posts"
      ).then(({ data }) => data);
      console.log(data);
      setPosts(data);
    }
    fetchdata();
  }, []);

  const showmore = () => {
    if (noOfPosts < 100) {
      setNoOfPosts(noOfPosts + 10);
   }
  }
 const showless = () => {
   
     setNoOfPosts(10);
   }

  return (
    <>
      <main class="w-full h-auto mt-14 pt-14 flex flex-col pb-5 items-center ">
        <h2 class="text-special text-center font-semibold font-header w-full text-2xl p-5">
          POSTS
        </h2>

        {posts.data ? (
          <>
            <div class="w-full flex items-center flex-wrap justify-center px-6">
              {posts.data.slice(0, noOfPosts).map((e) => {
                return (
                  <Link
                    to={`/post/${e.id}`}
                    key={e.id}
                    class="bg-bg2 w-full rounded-md auto h-80 m-2 sm:w-72 p-4 overflow-hidden hover:scale-105 duration-300 cursor-pointer"
                  >
                    <h5 class=" first-letter:capitalize text-2xl font-title font-bold text-title pb-4">
                      {e.title}
                    </h5>
                    <p class=" first-letter:capitalize font-body text-body font-light">
                      {e.body}
                    </p>
                  </Link>
                );
              })}
            </div>
            {noOfPosts < 99 ? (
              <button class="w-auto h-auto p-3 my-7 rounded-lg  font-bold font-header bg-sub text-white" onClick={showmore}>
                Show more
              </button>
            ) : (
              <button class="w-auto h-auto p-3 my-7 rounded-lg  font-bold font-header bg-sub text-white" onClick={showless}>
                Show less
              </button>
            )}
          </>
        ) : (
          <h1 class="text-white font-title text-2xl text-special p-5 pb-20 ">
            Loading....
          </h1>
        )}
      </main>
    </>
  );
}

export default Main;
