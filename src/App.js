import { Logo } from "./components/Logo";
import { ScrollBar } from "./components/ScrollBar";
import { About } from "./section/About";
import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";
import { NavBar } from "./section/NavBar";
import { Project } from "./section/Project";
import { TechStack } from "./section/TechStack";

function App() {
  return (
    <>
      <ScrollBar />
      <Logo />
      <NavBar />
      <Intro />
      <About />
      <TechStack />
      <Project />
      <Contact />
    </>
  );
}

export default App;
