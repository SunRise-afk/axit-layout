import { Jumbo } from "./components/Jumbo/Jumbo";
import { Navbar } from "./components/Navbar/Navbar";
import { Socials } from "./components/Socials/Socials";
import { Tabs } from "./components/Tabs/Tabs";
import { Sublist } from "./components/Sublist/Sublist";
import { StandardPicture } from "./components/StandardPicture/StandardPicture";
import { Process } from "./components/Process/Process";
import { Pricing } from "./components/Pricing/Pricing";
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
        <Sublist></Sublist>
        <StandardPicture></StandardPicture>
        <Process></Process>
        <Pricing></Pricing>
      </main>
    </div>
  );
}

export default App;
