import React from "react";
import { Link } from "react-router-dom";

function Logo( { name, to, className } ) {
  return (
    <Link to={ to } className={ className }>
      { name }
    </Link>
  )
}

export default Logo