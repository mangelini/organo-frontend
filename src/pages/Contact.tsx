import * as React from "react";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

export const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white/30 p-5 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mt-10">
        <div className="text-lg">
          <p>This is a demo site, do not insert real email and passwords</p>
          <p>Made with the following tech stack:</p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
            <li>Typescript</li>
            <li>Docker</li>
          </ul>
          <p>
            Source code available on Github{" "}
            <a href="https://github.com/matteo-angelini/restaurant-app">
              <ComputerDesktopIcon className="h-5 w-5 inline-block" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
