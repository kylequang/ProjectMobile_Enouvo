import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
    Montserrat: require('../../assets/fonts/Mulish.ttf'),
  });
};

export default useFonts;
