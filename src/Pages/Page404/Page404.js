import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      This page doesn't exist. Go <Link to="/">home</Link>
      <Link to="http://localhost:3000/books/ooM_AQAAMAAJ">Home</Link>
    </div>
  );
};
