import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MagnusScreen from './screens/MagnusScreen';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Details: undefined;
  Magnus: undefined;
};

const HomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}) => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};

const SettingsScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
}) => {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Details Screen</Text>
    </View>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

const MagnusStack = createStackNavigator();

const MagnusStackScreen = () => {
  return (
    <MagnusStack.Navigator>
      <MagnusStack.Screen name="Magnus" component={MagnusScreen} />
    </MagnusStack.Navigator>
  );
};

const linkConfig = {
  screens: {
    HomeStack: {
      screens: {
        Home: 'home',
        Profile: 'user',
      },
    },
    SettingsStack: {
      screens: {
        Settings: 'settings',
        Details: 'details',
      },
    },
    MagnusStackScreen: {
      screens: {
        Magnus: 'magnus',
      },
    },
  },
};

const linking = {
  prefixes: ['http://localhost:3000'],
  config: linkConfig,
};

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = '';

            if (route.name === 'Home') {
              iconName = 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = 'ios-list-outline';
            } else if (route.name === 'Magnus') {
              iconName = 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{}}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen name="Magnus" component={MagnusStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
