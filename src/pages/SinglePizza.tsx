import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import getPizzaById from 'server/getPizzaById';
import { IPizza } from 'types/types';
import { Loader } from 'components';
import starSVG from '../assets/img/heart.svg';

const types = ['тонкое', 'традиционное'];
const categories = [
  'Ofertas',
  'Construccion',
  'Electricas',
  'Hidraulicas-Neumaticas',
  'Generadores-Compresores',
  'Seguridad-Higene',
];

const SinglePizza: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<string>();
  const [pizza, setPizza] = React.useState<IPizza>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getPizza = async () => {
      setLoading(true);

      const item = await getPizzaById(
        typeof id === 'string' ? id : '',
        dispatch
      );

      setPizza(item);
      setLoading(false);
    };

    getPizza();
  }, [id, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="content__top">
        <h2 className="content__title">{pizza?.name}</h2>
      </div>
      <div className="pizza">
        <img className="pizza__image" src={pizza?.imageUrl} alt={pizza?.name} />
        <div className="pizza__info">
          <div className="pizza__info-item">
            <h3>Precio:</h3>
            <span>{pizza?.price} $</span>
          </div>
          <div className="pizza__info-item">
            <h3>Marca:</h3>
            <span>
              {pizza?.marca} <img src={starSVG} alt="Star" />
            </span>
          </div>
          <div className="pizza__info-item">
            <h3>Cuotas:</h3>
            <span>{pizza?.sizes.map((v) => `${v.toString()} см. `)}</span>
          </div>
          <div className="pizza__info-item">
            <h3>Origen</h3>
            <span>
              {pizza?.types.map((v, idx, arr) => {
                if (arr.length - 1 === idx) {
                  return `${types[v]}`;
                }
                return `${types[v]}, `;
              })}
            </span>
          </div>
          <div className="pizza__info-item">
            <h3>Ficha Tecnica:</h3>
            <span>{categories[pizza ? pizza?.category : 0]}</span>
          </div>
          <Link to="/">
            <div className="button pay-btn pizza-btn">
              <span>Comprar</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePizza;
