export const fetchData = () => (dispatch) => {
  fetch("http://localhost:8080/api/lists")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "FETCH_DATA",
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_DATA_ERROR",
        payload: error,
      });
    });
};

export const updateCard = (card_id, list_id) => (dispatch) => {
  fetch("http://localhost:8080/api/cards", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: card_id, list_id: list_id }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "FETCH_DATA",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "FETCH_DATA_ERROR",
        payload: error,
      });
    });
};

export const removeList = (list_id) => (dispatch) => {
  fetch("http://localhost:8080/api/lists", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: list_id }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "FETCH_DATA",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "FETCH_DATA_ERROR",
        payload: error,
      });
    });
};

export const createList = () => (dispatch) => {
  const title = prompt("List title:");
  fetch("http://localhost:8080/api/lists", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "FETCH_DATA",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "FETCH_DATA_ERROR",
        payload: error,
      });
    });
};

export const createCard = (list_id) => (dispatch) => {
  const title = prompt("Card title:");
  fetch("http://localhost:8080/api/cards", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, list_id: list_id }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "FETCH_DATA",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "FETCH_DATA_ERROR",
        payload: error,
      });
    });
};

export const removeCard = (card_id) => (dispatch) => {
  fetch("http://localhost:8080/api/cards", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: card_id }),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "FETCH_DATA",
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "FETCH_DATA_ERROR",
        payload: error,
      });
    });
};