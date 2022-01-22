import React from 'react';
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    return (
      <>
        <footer class="w-full h-11  flex px-8 items-center justify-between pb-4">
          <h5 class="text-white text-md ">JSONProxyHolder</h5>
          <a href={"https://github.com/shubham-gundgire"}>
            <AiFillGithub class="w-7 h-7 text-white cursor-pointer" />
          </a>
        </footer>
      </>
    );
}

export default Footer;
