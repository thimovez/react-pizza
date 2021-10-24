import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../components";

import { setCategory, setSortBy } from '../redux/action/filter';
import { fetchPizzas } from '../redux/action/pizzas';
// import filter from '../redux/reducers/filter';

const categoryNames =[
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];
const sortItem = [
  { name: 'популярнсть', type: 'popular' },
  { name: 'цена', type: 'price' },
  { name: 'алфавит', type: 'alphabet' }];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({filter}) => filter);


  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [category, sortBy]);
  
  const onSelectCategory = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const onSelectSortType = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
      <div className="container">
          <div className="content__top">
            <Categories
             activeCategory={category}
             onCLickCategory={onSelectCategory}
             items={categoryNames}/>
            <SortPopup activeSortType={sortBy} items={sortItem} onCLickSortType={onSelectSortType} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoaded 
              ? items.map((obj) => (<PizzaBlock key={obj.id} isLoading={true} {...obj} />))
              : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
          </div>
        </div>
  )
}

export default Home
