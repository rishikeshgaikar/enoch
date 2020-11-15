import {Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
const dWidth = Dimensions.get('window').width;
const dHeight = Dimensions.get('window').height;
export const dimensions = {
  width: dWidth,
  height: dHeight,
  wp: widthPercentageToDP,
  hp: heightPercentageToDP,
};
