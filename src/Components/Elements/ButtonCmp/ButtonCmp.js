import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';

import './ButtonCmp.css';

function ButtonCmp(props) {
  const {
    onClick,
    disabled,
    className,
    style,
    title
  } = props;

  return (
    <Button
      className={["ButtonCmp", className].join(' ')}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {title}
    </Button>
  );
}

ButtonCmp.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default ButtonCmp;
