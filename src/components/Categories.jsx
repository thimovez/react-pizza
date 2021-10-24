import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onCLickCategory}) => {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onCLickCategory(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                    <li
                    className={activeCategory === index ? 'active' : ''}
                    onClick={() => onCLickCategory(index)}
                    key={`${name}_${index}`}>
                    {name}
                    </li>
                ))};
            </ul>
        </div>
    )
});

Categories.propTypes = {
    activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    // PropTypes.arrayOf(PropTypes.object) -- масиив обьектов
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCLickCategory: PropTypes.func,
  };

Categories.defaultProps = { 
    activeCategory: null,
     items: []
    };

export default Categories
