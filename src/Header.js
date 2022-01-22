import React from 'react';
import { Link } from "react-router-dom";
function Header() {
    return (
      <>
        <Link to="/" class="w-full h-14 text-white bg-bg font-header font-semibold text-2xl flex items-center justify-center absolute top-0 left-0  cursor-pointer">
          JSONProxyHolder
        </Link>
      </>
    );
}

export default Header;
