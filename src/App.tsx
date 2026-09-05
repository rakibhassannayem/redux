import { Minus, Plus, RefreshCcw } from "lucide-react";
import { Button } from "./components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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

          <Button variant={"ghost"} size={"icon"}>
            <RefreshCcw color="gray" />
          </Button>

          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => dispatch(increment())}
          >
            <Plus color="gray" />
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
