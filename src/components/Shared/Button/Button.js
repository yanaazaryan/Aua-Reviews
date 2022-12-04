import style from './Button.module.scss';
import React from 'react';
import cx from 'classnames';

export const Button = ({ onClick, text, className }) => (
  <button className={cx(style.sharedButton, className)} onClick={onClick}>
    {text}
  </button>
)

export default Button;
