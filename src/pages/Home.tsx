import React from "react";
import { Button } from "@fluentui/react-components";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="bg-blue-500 py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl text-white font-bold">
            Welcome to the Hero Section
          </h1>
          <p className="text-white text-lg mt-4">This is a hero section</p>
          <Button appearance="primary">Get started</Button>
        </div>
      </section>
    </>
  );
};

export default Home;
