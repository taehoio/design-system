import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const TailwindComponent = () => (
  <View style={tw`p-4 android:pt-2 bg-blue-400 flex-row`}>
    <Text style={tw`text-md tracking-wide`}>Hello World</Text>
  </View>
);

export default TailwindComponent;
