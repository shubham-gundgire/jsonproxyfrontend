import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Post = () => {
    const { id } = useParams();
  const [comments, setComments] = useState('');
  const [post, setPost] = useState('');

  useEffect(() => {
    async function fetchdata() {
      const post = await axios(
        `https://agile-garden-93480.herokuapp.com/posts/${id}`,
        {
          headers: {
            "shubham-codedamn-projects": "content",
          },
        }
      ).then(({ data }) => data);
      const comments = await axios(
        `https://agile-garden-93480.herokuapp.com/posts/${id}/comments`,
        {
          headers: {
            "shubham-codedamn-projects": "content",
          },
        }
      ).then(({ data }) => data);
      setPost(post.data);
      setComments(comments.data)
      
    }
    fetchdata();
  },[])
    return (
      <>
        <main class="w-full h-full px-5 py-20 flex flex-col items-center ">
          {post ? (
            <div class="w-full h-auto sm:w-9/12 bg-bg2  p-10">
              <div class="first-letter:capitalize text-2xl font-title font-bold text-title pb-4">
                {post.title}
              </div>
              <div class=" first-letter:capitalize font-body text-body font-light text-lg">
                {post.body}
              </div>
            </div>
          ) : (
            <h1 class="text-whit font-bold text-title text-5xl align-middle">
             
            </h1>
          )}
          <div class="w-full sm:w-9/12 py-10">
            <h1 class="text-xl text-special font-bold font-title mb-5">
              Comments
            </h1>
            {comments ? (
              <div>
                {comments.map((el) => {
                  return (
                    <div class="bg-bg2 px-10 py-5 mb-5">
                      <div class="text-special capitalize text-lg font-semibold">
                        {el.name}
                      </div>
                      <div class="first-letter:capitalize text-md text-body mt-3">
                        {el.body}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <h1 class="text-whit font-bold text-title text-5xl align-middle">
                Loading
              </h1>
            )}
          </div>
        </main>
      </>
    );
}

export default Post;
