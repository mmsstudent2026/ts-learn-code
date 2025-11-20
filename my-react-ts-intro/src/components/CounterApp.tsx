import { useState, type FC } from "react";
import Container from "./Container";
import Button from "./Button";
import { Minus, Plus } from "lucide-react";

const CounterApp: FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleAdd = (): void => {
    setCount(count + 1);
  };

  const handleSub = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container className=" flex flex-col justify-center items-center min-h-screen gap-5 ">
      <h1 className=" text-7xl font-bold font-mono">{count}</h1>
      <div className=" flex gap-5">
        <Button variant="solid" onClick={handleSub}>
          <Minus />
        </Button>
        <Button variant="solid" onClick={handleAdd}>
          <Plus />
        </Button>
      </div>
    </Container>
  );
};

export default CounterApp;
