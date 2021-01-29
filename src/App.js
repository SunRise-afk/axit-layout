import { Jumbo } from "./components/Jumbo/Jumbo";
import { Navbar } from "./components/Navbar/Navbar";
import { Socials } from "./components/Socials/Socials";
import { Tabs } from "./components/Tabs/Tabs";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        <Jumbo></Jumbo>
        <Socials></Socials>
      </header>
      <main>
        <Tabs></Tabs>
      </main>
    </div>
  );
}

export default App;
