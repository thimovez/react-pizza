// Функция сокращения, которая возвращает следующее дерево состояний,
// учитывая текущее дерево состояний и действие, которое необходимо обработать.

//<===/ Тут хранится логика изменяющая только фильтрацию /===>

const initialState = {
    category: 0,
    sortBy: 'popular'
};

const filters = (state = initialState, action) => {
    if(action.type === 'SET_SORT_BY') {
        return {
            ...state ,
            sortBy: action.payload,
        };
    }
    if(action.type === 'SET_CATEGORY') {
        return {
            ...state ,
            category: action.payload,
        };
    }
    return state;
};

export default filters;