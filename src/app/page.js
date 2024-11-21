"use client";

import React, { useState } from "react";
import Preloader from "@/components/ui/preloader";
import Landing from "./home/page";

const Page = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <Landing />
      )}
    </>
  );
};

export default Page;
