import React from 'react';
import './Input.scss';
import ClassNames from 'classnames';
// import PropTypes from 'prop-types';

const alphaExp = /^[a-zA-Z]+$/;

interface IInputProps {
  name: string;
  changeValue: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, name: string) => void;
  value: string;
  error: string;
  saveValue: (name: string, error?: string) => void;
}

export const Input = ({ name, changeValue, value, error, saveValue }: IInputProps) => {
  const validateTitle = () => {
    if (!alphaExp.test(value)) {
      saveValue(name, `Please add correct ${name}`);

      return;
    }

    saveValue(name);
  };

  const validateValue = () => {
    if (!value) {
      saveValue(name, `Please add ${name}`);

      return;
    }

    if (name === 'title') {
      validateTitle();

      return;
    }

    saveValue(name);
  };

  const styleClasses = ClassNames('form-control', {
    'is-invalid': error,
  });

  return (
    <div className="col-auto">
      {
        name === 'number'
          ? (
            <label>
            {name}
            <input
            type="number"
            className={styleClasses}
            id="quantity"
            name="quantity"
            min="1"
            placeholder={name}
            value={value}
            required
            onChange={e => changeValue(e, name)}
          />
          </label>
          )
          : name === 'title'
          ? (
            <textarea
              className={styleClasses}
              id={name}
              placeholder={name}
              value={value}
              required
              onChange={e => changeValue(e, name)}
              onBlur={validateValue}
            />
          ) : (
            <label>
              {name}
              <input
              type="number"
              className={styleClasses}
              id="quantity"
              name="quantity"
              step="0.01"
              min="0"
              placeholder={name}
              value={value}
              required
              onChange={e => changeValue(e, name)}
            />
            </label>
          )
      }
      <div className="invalid-feedback">
        {error}
      </div>
    </div>
  );
};

// Input.propTypes = {
//   name: PropTypes.string.isRequired,
//   changeValue: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
//   error: PropTypes.string.isRequired,
//   saveValue: PropTypes.func.isRequired,
// };
