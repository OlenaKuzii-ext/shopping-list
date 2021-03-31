import React, { useState } from 'react';
// import propTypes from 'prop-types';
import { Input } from '../Input';
import './NewGoods.scss';
import { IGoodsType } from '../../App';



const initialState: IGoodsType = {
  title: '',
  number: 0,
  price: 0
};

interface INewGoodsProps {
  addGoods: (goods:IGoodsType) => void;
}

export const NewGoods = ({ addGoods }: INewGoodsProps) => {
  const [inputValues, setInputValues] = useState(initialState);
  const [inputErrors, setInputErrors] = useState(initialState);

  function saveValue(name: string, error = '') {
    setInputValues((prevState: IGoodsType) => ({
      ...prevState,
      [name]: prevState[name],
    }));

    setInputErrors(prevState => ({
      ...prevState,
      [name]: error,
    }));
  }

  function addNewGoods(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (Object.values(inputErrors).every(error => !error)
      && Object.values(inputValues).every(value => value)) {
      addGoods({ ...inputValues });

      setInputValues(initialState);
      setInputErrors(initialState);
    }
  }

  function changeValue(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, name: string) {
    const { value } = event.target;
    
    setInputValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form
      className="form row gy-2 gx-3 align-items-center"
      onSubmit={addNewGoods}
    >
      {
        Object.keys(inputValues).map(key => (
          <Input
            key={key}
            name={key}
            value={inputValues[key]}
            error={inputErrors[key]}
            changeValue={changeValue}
            saveValue={saveValue}
          />
        ))
      }
      <button
        type="submit"
        className="button btn btn-outline-secondary"
      >
        add new goods
      </button>
    </form>
  );
};

// NewGoods.propTypes = {
//   addGoods: propTypes.func.isRequired,
// };
