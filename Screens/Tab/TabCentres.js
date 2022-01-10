import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Centre_Info from './Centre_Info';
import Feature from './Feature';
import Hours from './Hours';
import Marketing from './Marketing';
import Ratings_Reviews from './Ratings_Reviews';
import Service from './Service';
import Summary from './Summary';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: Summary,
  second: Centre_Info,
  three: Hours,
  four: Service,
  five: Feature,
  six: Ratings_Reviews,
  seven: Marketing,
});

export default function TabViewCentres() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Summary' },
    { key: 'second', title: 'CENTRE INFORMATION' },
    { key: 'three', title: 'Hours' },
    { key: 'four', title: 'Services' },
    { key: 'five', title: 'Features' },
    { key: 'six', title: 'Ratings and Reviews' },
    { key: 'seven', title: 'Marketing' },
  ]);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            renderLabel={({ route, color }) => (
              <View style={styles.tabTitle}>
                <Text style={{ color: 'black' }}>{route.title}</Text>
              </View>
            )}
            style={{ backgroundColor: 'white' }}
          />
        )}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: StatusBar.currentHeight,
    padding: 10,
  },
  scene: {
    flex: 1,
  },
  tabTitle: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});
