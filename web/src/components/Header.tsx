import { Plus, X } from "phosphor-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { HabitForm } from "./HabitForm";

export function Header() {
  const [modalHandler, setModalHandler] = useState(false);

  function handleModal() {
    setModalHandler(true);
  }

  return (
    <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between hover:text-blue-200 transition-all">
        <h1 className="text-4xl w-fit font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-700">
          Momentum
        </h1>

        <Dialog.Root>
          <Dialog.Trigger
            type="button"
            onClick={handleModal}
            className="border border-blue-500 font-semibold rounded-lg px-5 py-2 flex items-center gap-3"
          >
            New habit
            <Plus size={25} />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
            <Dialog.Content className="absolute p-10 bg-raisinblack rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Close>
                <X
                  size={24}
                  aria-label="Close"
                  className="absolute right-6 top-6 text-white hover:text-zinc-300"
                ></X>
              </Dialog.Close>
              <Dialog.Title className="text-3xl font-bold leading-tight">
                Create habit
              </Dialog.Title>

              <HabitForm></HabitForm>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}
