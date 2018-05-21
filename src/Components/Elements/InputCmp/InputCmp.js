import PropTypes from 'prop-types';
import React from 'react';

import styles from './InputCmp.css';

function InputCmp(props) {
  const {
    onChange,
    disabled,
    className,
    style,
    type,
    placeholder,
    id,
    value
  } = props || { id: null }

  return (
    <input
      className={[ styles.InputCmp, className].join(' ')}
      type={type}
      id={id}
      disabled={disabled}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
  );
}

InputCmp.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.any
};

export default InputCmp;
