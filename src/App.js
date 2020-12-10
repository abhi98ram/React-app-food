import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": " Melon",
  "🍉": "Watermelon",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🥪": "Sandwich",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🍟": "French Fries",
  "🍔": "Hamburger",
  "🍨": "Ice Cream",
  "🍧": "Shaved Ice",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🧁": "Cupcake",
  "🍙": "Rice Ball",
  "🍛": "Curry and Rice",
  "🍚": "Cooked Rice",
  "🍘": "Rice Cracker",
  "🍣": "Sushi",
  "🥝": "Kiwifruit",
  "🥦": "Broccoli",
  "🧅": "Onion",
  "🧀": "Cheese Wedge",
  "🌮": "Taco",
  "🥙": "Pita Sandwich",
  "🍿": "Popcorn",
  "🍝": "Spaghetti",
  "🍤": "Fried Shrimp",
  "🍬": "Candy",
  "🍯": "Honey Pot",
  "🍮": "Custard",
  "🥃": "Tumbler Glass",
  "🥧": "Pie",
  "🍭": "Lollipop"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Click on the emoji");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 className="logo">Food Lover's</h1>
      <input
        className="bar"
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "40%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      <section className="food">
        {emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}{" "}
          </span>
        ))}
      </section>
    </div>
  );
}
