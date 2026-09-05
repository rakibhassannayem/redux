import { Minus, Plus, RefreshCcw } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
  selectValue,
} from "./redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const value = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  return (
    <main className="flex items-center justify-center h-screen bg-gray-50">
      <section>
        <div className="text-center">
          <h1 className="text-xl font-bold">Counter</h1>
          <p className="text-xs font-medium text-gray-500 text-transform: uppercase">
            Redux State
          </p>
        </div>

        <div className="text-center">
          <span className="text-8xl font-thin">{value}</span>
        </div>

        <div className="text-center space-x-2">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => dispatch(decrement())}
          >
            <Minus color="gray" />
          </Button>

          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => dispatch(reset())}
          >
            <RefreshCcw color="gray" />
          </Button>

          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => dispatch(increment())}
          >
            <Plus color="gray" />
          </Button>

          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => dispatch(incrementByValue(5))}
          >
            <Plus color="gray" />5
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => dispatch(incrementByValue(5))}
          >
            <Plus color="gray" />5
          </Button>

          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => dispatch(incrementByValue(10))}
          >
            <Plus color="gray" />
            10
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
