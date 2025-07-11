import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Detail: undefined;
};

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Detail'
>;
