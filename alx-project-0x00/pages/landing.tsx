import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className=" text-xl font-extralight">Landing Page</h1>

      <div className="mt-4 space-y-4">
        <Card />
        <Card />
      </div>

      <div className="mt-6 flex gap-3">
        <Button title="Small" size="sm" shape="rounded-sm" />
        <Button title="Medium" size="md" shape="rounded-md" />
        <Button title="Large" size="lg" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
