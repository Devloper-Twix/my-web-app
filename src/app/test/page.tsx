import React from "react";
import { ModeToggle } from "@/components/ui/modetoggle";

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Welcome to My App</h1>
      <ModeToggle />
    </div>
  );
};

export default HomePage;
