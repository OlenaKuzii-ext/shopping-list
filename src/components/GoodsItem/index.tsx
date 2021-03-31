import React from 'react';
// import propTypes from 'prop-types';
import './GoodsItem.scss';

interface IGoodsItemProps {
  title: string;
  price: number;
  number: number;
  removeGoods: (title: string) => void;
  changeNumber: (name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const GoodsItem = (props: IGoodsItemProps) => {
  const { title, price, number, removeGoods, changeNumber } = props;

  return (
    <tr>
      <th scope="row">{title}</th>
      <td>
        <input
          type="number"
          className="number-input"
          name={title}
          min="1"
          value={number}
          required
          onChange={changeNumber.bind(this, title)}
        />
      </td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => removeGoods(title)}
          type="button"
          className="btn-close"
        />
      </td>
    </tr>
  );
};

// GoodsItem.propTypes = {
//   title: propTypes.string.isRequired,
//   price: propTypes.number.isRequired,
//   number: propTypes.number.isRequired,
//   removeGoods: propTypes.func.isRequired,
//   changeNumber: propTypes.func.isRequired,
// };
