import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("About component mounted");

    return () => {
      console.log("About component unmounted");
    };
  }, []);

  return (
    <div className="w-full h-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold">About</h1>
    </div>
  );
};

export default About;
