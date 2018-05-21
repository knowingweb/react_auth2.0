import PropTypes from 'prop-types';
import React from 'react';

import styles from './LabelCmp.css';

function LabelCmp(props) {
  const {
    className,
    style,
    title
  } = props;

  return (
    <label
      className={[ styles.LabelCmp, className].join(' ')}
      style={style}
    >
      {title}
    </label>
  );
}

LabelCmp.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default LabelCmp;
