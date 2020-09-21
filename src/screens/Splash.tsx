import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { Loading } from './Loading';
import { RootStackParamList } from '../App';

export const SplashScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'Splash'>) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3500);
  }, [navigation]);

  return <Loading />;
};
