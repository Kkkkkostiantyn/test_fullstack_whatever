import React from "react";
import "./style.css";
import Card from "../Card";
import { useDispatch } from "react-redux";
import { updateCard, removeList, createCard } from "../../redux/actions";

const List = ({ data }) => {
  const dispatch = useDispatch();
  const { id, title, Cards } = data;

  const drop = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    dispatch(updateCard(cardId, id));
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const removeBtnHandler = () => {
    if (Cards.length !== 0) {
      alert("only empty lists can be deleted");
    } else {
      dispatch(removeList(id));
    }
  };

  const addCardBtnHandler = () => {
    dispatch(createCard(id));
  };

  const children = Cards.map((e, index) => <Card key={index} data={e} />);

  return (
    <div className="list" onDrop={drop} onDragOver={dragOver}>
      <button className="removeBtn" onClick={removeBtnHandler}>
        X
      </button>
      <button className="addCardBtn" onClick={addCardBtnHandler}>
        +
      </button>
      <h2 className="listitle">{title}</h2>
      <div className="card_container">{children}</div>
    </div>
  );
};

export default List;
