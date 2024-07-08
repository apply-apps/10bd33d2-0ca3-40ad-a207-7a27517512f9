// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, TextInput, Button } from 'react-native';

// Combined WorkoutList Component
const workouts = [
    { id: '1', name: 'Push Ups', reps: '20', sets: '3' },
    { id: '2', name: 'Squats', reps: '15', sets: '4' },
    { id: '3', name: 'Plank', duration: '60s', sets: '3' },
];

const WorkoutList = () => {
    const renderItem = ({ item }) => (
        <View style={workoutListStyles.itemContainer}>
            <Text style={workoutListStyles.name}>{item.name}</Text>
            <Text style={workoutListStyles.details}>{item.reps ? `Reps: ${item.reps}` : `Duration: ${item.duration}`}</Text>
            <Text style={workoutListStyles.details}>Sets: {item.sets}</Text>
        </View>
    );

    return (
        <FlatList
            data={workouts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const workoutListStyles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 16,
        marginTop: 5,
    },
});

// Combined AddWorkout Component
const AddWorkout = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');

    const handleAddWorkout = () => {
        console.log('Workout Added:', { name, reps, sets });
        // Reset input fields after adding the workout
        setName('');
        setReps('');
        setSets('');
    };

    return (
        <View style={addWorkoutStyles.formContainer}>
            <TextInput
                style={addWorkoutStyles.input}
                placeholder="Workout Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={addWorkoutStyles.input}
                placeholder="Reps (e.g. 20)"
                value={reps}
                onChangeText={setReps}
                keyboardType="number-pad"
            />
            <TextInput
                style={addWorkoutStyles.input}
                placeholder="Sets (e.g. 3)"
                value={sets}
                onChangeText={setSets}
                keyboardType="number-pad"
            />
            <Button title="Add Workout" onPress={handleAddWorkout} />
        </View>
    );
};

const addWorkoutStyles = StyleSheet.create({
    formContainer: {
        marginBottom: 20,
    },
    input: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
});

// Combined App Component
export default function App() {
    return (
        <SafeAreaView style={appStyles.container}>
            <Text style={appStyles.title}>Workout Tracker</Text>
            <AddWorkout />
            <WorkoutList />
        </SafeAreaView>
    );
}

const appStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});