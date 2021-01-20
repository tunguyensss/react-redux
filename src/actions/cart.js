export const addNewItem = (id) => {
  return {
    type: "ADD_NEW_ITEM",
    payload: id
  };
};

export const removeAnItem = (id) => {
  return {
    type: "REMOVE_AN_ITEM",
    payload: id
  };
};
