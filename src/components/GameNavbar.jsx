import React from "react";
import { Link } from "react-router-dom";

export default function GameNavbar() {
  return (
    <>
      <div className="flex ">
        <Link
          className=" fs-4 text-danger"
          style={{ textDecoration: "none"}}
          to="/"
        >
          Home{" "}|{" "}
        </Link>
        
        <Link
          className=" fs-4 text-danger"
          style={{ textDecoration: "none"}}
          to="/board"
        >
         Board{" "}|{" "}
        </Link>
      </div>
    </>
  );
}
