import React, {useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import HistoryCard from './HistoryCard';

export default function History() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerScroll}>
          <HistoryCard/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 428,
    // height: 824,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    width: 428,
    // height: 824,
    overflow: 'scroll',
  },
});
