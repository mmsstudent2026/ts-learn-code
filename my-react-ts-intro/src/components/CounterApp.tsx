import { useEffect, useState } from "react";
import Container from "./Container";
import { Minus, Plus } from "lucide-react";
import Button from "./Button";

const CounterApp = () => {
  const [count, setCount] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const handleAdd = () => {
    setAnimating(true);
    setCount(count + 1);
  };

  const handleSub = () => {
    setAnimating(true);
    setCount(count > 0 ? count - 1 : 0);
  };

  useEffect(() => {
    if (!animating) return;
    const timeout = setTimeout(() => setAnimating(false), 75);
    return () => clearTimeout(timeout);
  }, [animating]);

  return (
    <Container className=" flex flex-col items-center justify-center py-10 gap-5 min-h-screen ">
      <h1
        className={`text-7xl font-bold duration-75 ${
          animating ? "scale-75 translate-y-2.5" : "scale-100"
        }`}
      >
        {count}
      </h1>
      <div className=" space-x-5">
        <Button onClick={handleSub} variant="solid">
          <Minus />
        </Button>
        <Button onClick={handleAdd} variant="solid">
          <Plus />
        </Button>
      </div>
    </Container>
  );
};

export default CounterApp;
