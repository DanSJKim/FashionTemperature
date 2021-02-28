import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, SafeAreaView, View, Text } from 'react-native';

function Loading() {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <View>
        <ActivityIndicator color={colors.primary} />
        <Text>초기 로딩화면</Text>
      </View>
    </SafeAreaView>
  );
}

export default Loading;
