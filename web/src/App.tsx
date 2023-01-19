import "./App.css";
import { HabitsTable } from "./components/HabitsTable";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <HabitsTable />
      </div>
    </div>
  );
}

export default App;
