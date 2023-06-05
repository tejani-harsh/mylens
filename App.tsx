import React from 'react';
import {View} from 'react-native';
import ManagerHomePage from './Pages/ManagerHomePage';
import UserHomePage from './Pages/UserHomePage';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <ManagerHomePage /> */}
      <UserHomePage />
    </View>
  );
};

export default App;
