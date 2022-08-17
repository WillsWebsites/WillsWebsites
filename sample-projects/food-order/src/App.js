import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  const openCartHandler = props => {
    setCartOpened(true);
  };

  const closeCartHandler = props => {
    setCartOpened(false);
  };

  return (
    <CartProvider>
      {cartOpened && <Cart onCartClose={closeCartHandler} />}
      <Header onCartOpen={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
