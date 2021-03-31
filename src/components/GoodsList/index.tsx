import React from 'react';
// import propTypes from 'prop-types';

import { GoodsItem } from '../GoodsItem';
import { IGoodsType } from '../../App';

interface IListProps {
  goods: Array<IGoodsType>;
  removeGoods: (title: string) => void;
  sortByTitle: () => void;
  sortByPrice : () => void;
  sortByN: () => void;
  changeNumber: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const GoodsList = ({ goods, removeGoods, sortByTitle, sortByPrice, sortByN, changeNumber }: IListProps) => (
  <table className="table table-hover">
    <thead className="table-dark">
      <tr>
        <th scope="col">
          <button
            className="btn btn-light"
            onClick={sortByTitle}
            type="button"
          >
            Title
          </button>
        </th>
        <th scope="col">
          <button
            className="btn btn-light"
            onClick={sortByN}
            type="button"
          >
            N
          </button>
        </th>
        <th scope="col">
          <button
            className="btn btn-light"
            onClick={sortByPrice}
            type="button"
          >
            Cost
          </button>
        </th>
        <th scope="col" />
      </tr>
    </thead>
    <tbody>
      {goods.map(item => (
        <GoodsItem
          key={item.title}
          {...item}
          removeGoods={removeGoods}
          changeNumber={changeNumber}
        />
      ))}
    </tbody>
  </table>
);

// GoodsList.propTypes = {
//   goods: propTypes.arrayOf(
//     propTypes.shape({
//       title: propTypes.string.isRequired,
//       number: propTypes.number.isRequired,
//       price: propTypes.number.isRequired,
//     }),
//   ),
//   removeGoods: propTypes.func.isRequired,
//   sortByTitle: propTypes.func.isRequired,
//   sortByN: propTypes.func.isRequired,
//   sortByPrice: propTypes.func.isRequired,
//   changeNumber: propTypes.func.isRequired,

// };

// GoodsList.defaultProps = {
//   goods: [],
// };
