import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LostPassword from '@views/auth/LostPassword';
import SignIn from '@views/auth/SignIn';
import SignUp from '@views/auth/SignUp';
import Verification from '@views/auth/Verification';
import {useSelector} from 'react-redux';
import {AuthStackParamList} from 'src/@types/navigation';
import {getAuthState} from 'src/store/auth';
import { RootState } from "src/store";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const authState = useSelector<RootState>((state) => state.auth); // Directly access the auth state from RootState - Do not remove this
  // const authState = useSelector(getAuthState);
  console.log(authState);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LostPassword" component={LostPassword} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
