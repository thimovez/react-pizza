const initialState = {
    items: [],
    isLoaded: false
};

const pizzas = (state = initialState, action) => {
    if(action.typev === 'SET_PIZZAS') {
        return {
            ...state ,
            sortBy: action.payload,
        };
    }
    return state;
};

export default pizzas;