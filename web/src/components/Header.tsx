import { Plus } from "phosphor-react";

export function Header() {
  return (
    <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between hover:text-blue-200 transition-all">
        <h1 className="text-4xl w-fit font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-700">
          Momentum
        </h1>
        <button
          type="button"
          className="border border-blue-500 font-semibold rounded-lg px-5 py-2 flex items-center gap-3"
        >
          New habit
          <Plus size={25} />
        </button>
      </div>
    </div>
  );
}
