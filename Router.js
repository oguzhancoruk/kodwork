import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Drawer from './src/Navigation/Drawer';

import FavoriteProvider from './src/context/FavoriteProvider';

const Router = () => {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </FavoriteProvider>
  );
};

export default Router;