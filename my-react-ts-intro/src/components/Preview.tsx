import { Book, HomeIcon } from "lucide-react";
import Container from "./Container";
import TextCard from "./TextCard";
import Button from "./Button";
import type { MouseEvent } from "react";

const Preview = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("u click", e.target);
  };
  return (
    <Container className=" p-5 space-y-5">
      <TextCard
        icon={<HomeIcon />}
        heading="Hello React & TS"
        description="Using React + TypeScript means writing React components where props, state, and functions have types, giving you better tooling and fewer bugs."
      />
      <TextCard
        icon={<Book />}
        heading="Hello Par"
        description="San kyi tar par byar"
      />
      <div className=" space-x-5">
        <Button variant="solid" onClick={handleClick}>
          Click Me
        </Button>
        <Button variant="outline">Click Me</Button>
      </div>
    </Container>
  );
};

export default Preview;
