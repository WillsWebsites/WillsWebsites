import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Wills Meals</h1>
        <HeaderCartButton onCartOpen={props.onCartOpen}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of a dank food" />
      </div>
    </Fragment>
  );
};

export default Header;
