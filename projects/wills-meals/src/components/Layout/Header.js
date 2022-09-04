import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes['header-container']}>
          <h1>Will's Meals</h1>
          <HeaderCartButton onCartOpen={props.onCartOpen}/>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of a dank food" />
      </div>
    </Fragment>
  );
};

export default Header;
