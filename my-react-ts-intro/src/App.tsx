// import { Book, HomeIcon } from "lucide-react";
// import Container from "./components/Container";
// import TextCard from "./components/TextCard";
// import Button from "./components/Button";
// import type { MouseEvent } from "react";

import TaskManager from "./components/TaskManager";

function App() {
  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   console.log("u click", e.target);
  // };

  return (
    <main>
      <TaskManager />
      {/* <Container className=" p-5 space-y-5">
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
      </Container> */}
    </main>
  );
}

export default App;
