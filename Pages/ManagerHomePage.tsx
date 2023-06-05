import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ManagerHomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <Text style={styles.projectName}>Project Name</Text>
        <Text style={styles.welcomeMessage}>Welcome!</Text>
        <Text style={styles.menuOptions}>Menu</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Active Users</Text>
        <Text style={styles.panelContent}>10</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Active Surveys</Text>
        <Text style={styles.panelContent}>5</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Completed Surveys</Text>
        <Text style={styles.panelContent}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 64,
    backgroundColor: 'lightblue',
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeMessage: {
    fontSize: 16,
  },
  menuOptions: {
    fontSize: 16,
  },
  panel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    backgroundColor: 'lightgray',
    borderRadius: 8,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  panelContent: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ManagerHomePage;
