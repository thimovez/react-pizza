import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});
//Получить данные 
// Асинхронная ф-ция
export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get("http://localhost:3001/pizzas").then(({ data }) => {
    dispatch(setPizzas(data));
  });
};  

// Изменение фотографий пиц
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
