import React from "react";

export default function Footer() {
  return (
    <footer className="bg-rose-900 px-2 sm:px-4 py-10 dark:bg-gray-900  w-full z-20 top-0 left-0 text-white  ">
      <div className="flex justify-end px-20 gap-20">
        <div className="flex flex-col">
          <p>Lorem ipsum</p>
          <p>dolor sit amet</p>
          <p>consectetur</p>
          <p>repellat totam</p>
          <p>qui veritatis</p>
        </div>
        <div className="flex flex-col">
          <p> nisi delectus</p>
          <p>ipsa numquam</p>
          <p>cupiditate ipsum</p>
          <p>cupiditate ipsum</p>
          <p>ad maiores</p>
        </div>
      </div>
      <div className="flex justify-center pt-5">Fly Searcher</div>
    </footer>
  );
}
