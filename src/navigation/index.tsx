import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import {useSelector} from 'react-redux';
import {getAuthState} from 'src/store/auth';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

interface Props {}

const AppNavigator: FC<Props> = props => {
  const {loggedIn} = useSelector(getAuthState);
  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
