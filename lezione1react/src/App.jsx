import Counter from "./assets/components/Counter/Counter";
import Card from "./assets/components/Card/Card";
import Card2 from "./assets/components/Counter/Card2";
import "./assets/components/Card/Card.css";
import Sascart from "./assets/components/Sascart/Sascart";
import "./assets/components/Sascart/Sascart.css";
import Bitcoin from "./assets/components/Bitcoin/Bitcoin";
import Popusa from "./assets/components/tabella/Tabella";
import Uni from "./assets/components/Uni/Uni";
import Access from "./assets/components/Access/Access";

function App() {
  const API = [
    {
      id: 0,
      title: "Titolo 1",
      icon: "X",
      mainInfo: "13000",
      description: "Rispetto a Q3",
    },
    {
      id: 1,
      title: "Titolo 2",
      icon: "X",
      mainInfo: "63000",
      description: "Rispetto a Q2",
    },
    {
      id: 2,
      title: "Titolo 3",
      icon: "X",
      mainInfo: "3000",
      description: "Rispetto a Q1",
    },
    {
      id: 3,
      title: "Titolo 4",
      icon: "X",
      mainInfo: "16000",
      description: "Rispetto a Q4",
    },
  ];

  return (
    <>
     
     
      <Access></Access>
    </>
  );
}

export default App;
