import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex ">
        <Link
          className=" p-3 fs-4 text-danger"
          style={{ textDecoration: "none"}}
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-3 fs-4 text-danger"
          style={{ textDecoration: "none"}}
          to="/board"
        >
          Board
        </Link>
        <Link
          className="p-3 fs-4 text-danger"
          style={{ textDecoration: "none"}}
          to="/card"
        >
          Card
        </Link>
        <Link
          className="p-3 fs-4 text-danger"
          style={{ textDecoration: "none"}}
          to="/play"
        >
          Play
        </Link>
        <Link
          className="p-3 fs-4 text-danger"
          style={{ textDecoration: "none"}}
          to="/cardsolitaire"
        >
          CardSolitaire
        </Link>
        
      </div>
    </>
  );
}
