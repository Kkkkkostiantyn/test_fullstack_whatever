import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, createList } from "./redux/actions";
import List from "./components/List";
import "./style.css";

const App = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state);
  const lists = data.map((e, index) => <List key={index} data={e} />);
  const createListBtnHandler = () => {
    dispatch(createList());
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <button className="createListBtn" onClick={createListBtnHandler}>
          +
        </button>
        {lists}
      </>
    );
  }
};
export default App;
