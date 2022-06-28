import React from 'react';
import { useDispatch } from 'react-redux';

import { changeCategory } from '../redux/filter/slice';

type CategoryProps = {
  categoryId: number;
};

const categories = [
  { category: 'Ofertas Especiales', id: 'cat0' },
  { category: 'Herramientas Construccion', id: 'cat1' },
  { category: 'Herramientas Electricas', id: 'cat2' },
  { category: 'Hidraulicas y Neumaticas', id: 'cat3' },
  { category: 'Generadores y Compresores', id: 'cat4' },
  { category: 'Seguridad Higene', id: 'cat5' },
];

const Categories: React.FC<CategoryProps> = React.memo(({ categoryId }) => {
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map(({ category, id }, idx) => (
          <li
            onClick={() => dispatch(changeCategory(idx))}
            className={categoryId === idx ? 'active' : ''}
            key={id}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
