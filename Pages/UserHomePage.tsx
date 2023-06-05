import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const UserHomePage = () => {
  const pendingSurveys = [
    {id: 1, description: 'Survey 1', status: 'Pending'},
    {id: 2, description: 'Survey 2', status: 'Pending'},
    {id: 3, description: 'Survey 3', status: 'Pending'},
  ];

  const completedSurveys = [
    {id: 4, description: 'Survey 4', status: 'Completed'},
    {id: 5, description: 'Survey 5', status: 'Completed'},
  ];

  const handleCompleteSurvey = surveyId => {
    // Perform logic to redirect to Survey Questions page for the selected survey
    console.log(`Redirect to Survey Questions for surveyId: ${surveyId}`);
  };

  const renderPendingSurveys = () => {
    return pendingSurveys.map(survey => (
      <TouchableOpacity
        key={survey.id}
        style={styles.surveyContainer}
        onPress={() => handleCompleteSurvey(survey.id)}>
        <Text style={styles.surveyDescription}>{survey.description}</Text>
        <Text style={styles.surveyStatus}>{survey.status}</Text>
      </TouchableOpacity>
    ));
  };

  const renderCompletedSurveys = () => {
    return completedSurveys.map(survey => (
      <View key={survey.id} style={styles.surveyContainer}>
        <Text style={styles.surveyDescription}>{survey.description}</Text>
        <Text style={styles.surveyStatus}>{survey.status}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Pending Actions</Text>
        {renderPendingSurveys()}
      </View>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Completed Surveys</Text>
        {renderCompletedSurveys()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panel: {
    flex: 1,
    margin: 16,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 16,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  surveyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  surveyDescription: {
    flex: 1,
    fontSize: 16,
  },
  surveyStatus: {
    fontSize: 16,
    marginLeft: 16,
  },
});

export default UserHomePage;
