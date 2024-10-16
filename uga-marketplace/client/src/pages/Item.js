import { useState } from "react";
import "./item.css";

const Item = (props) => {
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredTyped: "Ticket",
    enteredPrice: "",
  });

  const nameChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredName: event.target.value,
    }));
  };

  const typedChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredTyped: event.target.value,
    }));
  };

  const priceChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredPrice: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const itemData = {
      name: userInput.enteredName,
      typed: userInput.enteredTyped,
      price: userInput.enteredPrice,
    };

    console.log(itemData);

    setUserInput({
      enteredName: "",
      enteredTyped: "Ticket",
      enteredPrice: "",
    });
  };

  return (
    <div className="item">
      <h2>New Item</h2>
      <form onSubmit={submitHandler}>
        <label>Item Name</label>
        <input
          type="text"
          required
          value={userInput.enteredName}
          onChange={nameChangeHandler}
        />
        <label>Item Type</label>
        <select value={userInput.enteredTyped} onChange={typedChangeHandler}>
          <option value="Ticket">Ticket</option>
          <option value="Textbooks">Textbooks</option>
        </select>
        <label>Item Price</label>
        <input
          type="text"
          required
          value={userInput.enteredPrice}
          onChange={priceChangeHandler}
        />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default Item;
