import "./style.css";
import { useDispatch } from "react-redux";
import { removeCard } from "../../redux/actions";
import moment from "moment";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const { id, title, updatedAt } = data;
  const editTime = moment(updatedAt).toNow();

  const dragStart = (e) => {
    e.dataTransfer.setData("cardId", id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const removeCardBtnHandler = () => {
    dispatch(removeCard(id));
  };

  return (
    <div
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
      className="card"
    >
      <button className="removeCardBtn" onClick={removeCardBtnHandler}>
        X
      </button>
      {title}
      <div className="editTime">Edited {editTime}</div>
    </div>
  );
};

export default Card;
