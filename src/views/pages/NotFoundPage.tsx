import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-auto flex flex-col justify-center items-center">
      <h1 className="text-7xl">Oops!</h1>
      <div className="my-10">404 - PAGE NOT FOUND</div>
      <p>Sorry. The page you are looking for doesn't exist.</p>
      <button
        onChange={() => {
          navigate("/");
        }}
      >
        Return Home
      </button>
    </div>
  );
}
