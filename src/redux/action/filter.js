// Функция которая возвращает обьект action
// Функция setSortBy получает значение name и передается в обьект
//<===/ В этом файле хранятся действия связанные только с фильтрацией /===>

// Изменения фильтрации (сортировка)
const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
});

// Изменение категории (выбор категории: )
const setCategory= (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});
