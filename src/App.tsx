import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList';
import { NewGoods } from './components/NewGoods';
import goodsFromServer from './api/goods.json';
import './App.scss';

export interface IGoodsType {
  [x: string]: any;
  title: string;
  price: number;
  number: number;
}

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);

  function addGoods(savedGoods: IGoodsType):void {
    setGoods([...goods, savedGoods]);
  }

  function removeGoods(item: string):void {
    const newGoods = goods.filter(element => element.title !== item);

    setGoods([...newGoods]);
  }

  function sortByTitle():void {
    const sortedByTitle = [...goods].sort((a, b) => (
      a.title.localeCompare(b.title)
    ));

    setGoods(sortedByTitle);
  }

  function sortByN() {
    const sortedByN = [...goods].sort((a, b) => (
      b.number - a.number
    ));

    setGoods(sortedByN);
  }

  function sortByPrice() {
    const sortedByPrice = [...goods].sort((a, b) => (
      b.price - a.price
    ));

    setGoods(sortedByPrice);
  }

  function removeAllGoods() {
    setGoods([]);
  }

  const changeNumber = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const newGoods = [...goods];

    for (let i = 0; i < newGoods.length; i += 1) {
      if (newGoods[i].title === event.target.name) {
        newGoods[i].number = Number(event.target.value);
      }
    }

    setGoods(newGoods);
  };

  const getSum = () => {
    const callback = (acc: number, value: IGoodsType) => acc + (value.number * value.price);
    const currentSum = goods.reduce(callback, 0);

    return currentSum;
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="display-6">Add goods</h2>
        <NewGoods addGoods={addGoods} />
      </div>
      <div className="row">
        {goods.length
          ? (
            <div>
              <div>
                <h1 className="display-4">Shopping cart</h1>
                <GoodsList
                  goods={goods}
                  removeGoods={removeGoods}
                  sortByTitle={sortByTitle}
                  sortByN={sortByN}
                  sortByPrice={sortByPrice}
                  changeNumber={changeNumber}
                />
                <button
                  onClick={() => removeAllGoods()}
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  Clear
                </button>
              </div>
              <h4 className="display-6 sum">
                Sum:
                {getSum()}
              </h4>
            </div>

          )
          : (
            <h4 className="display-4">
              Add your goods
            </h4>
          )
        }
      </div>
    </div>
  );
};
