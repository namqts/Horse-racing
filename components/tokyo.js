import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

export default function tokyo() {
  return (
    <LinearTextGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.1}}
      useAngle={true}
      angle={360}
      locations={[0.25, 0.4546, 0.557, 0.7217]}
      colors={['#F9E841', '#D08435', '#FEFF97', '#FEF37D']}
      style={styles.text}>
      <Text>Tokyo</Text>
    </LinearTextGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#FFFFFF',
  },
});
