import { useEffect, useState } from "react";
import "./App.css";
import Card1 from "./Card1";
import Card2 from "./Card2";

function App() {
  const scrollKeys = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "PageUp",
    "PageDown",
    " ",
  ];

  const [scrolled, setScrolled] = useState(false);
  const [card1, setCard1] = useState(true);

  const handler = (e) => {
    setScrolled(true);
  };

  const keyHandler = (e) => {
    if (scrollKeys.some((k) => k === e.key)) {
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  useEffect(() => {
    // make sure the card is only swapped once every 300 ms (this is half of the animation time,
    // so spinning can be simulated on continuous scrolling)
    if (scrolled) {
      setCard1(!card1);
      setTimeout(() => setScrolled(false), 300);
    }
  }, [scrolled]);

  return (
    <div className="App" onWheel={handler} onTouchMove={handler}>
      <Card1 active={card1} scrolled={scrolled}></Card1>
      <Card2 active={!card1} scrolled={scrolled}></Card2>
    </div>
  );
}

export default App;
