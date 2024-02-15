import Homepage from "./containers/Homepage";
import Skills from "./containers/Skills";

export default function Home() {
  return (
    <main className="h-[90vh] overflow-x-hidden w-full gap-44 flex flex-col items-start my-40 justify-start mx-40">
      <Homepage />
      <Skills />
    </main>
  );
}
