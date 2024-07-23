import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const StartButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="start" onPress={() => alert('Start button pressed!')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 21, 
    width: '89%'  // This adds margin around the button
  },
});

export default StartButton;
