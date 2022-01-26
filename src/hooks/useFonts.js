import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
    Mulish: require('../../assets/fonts/Mulish.ttf'),
  });
};

export default useFonts;
