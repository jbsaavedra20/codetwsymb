import React from 'react';
import { View, Text } from 'react-native';

export const ErrorMessage = ({ message, visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <View style={{ backgroundColor: '#ff3936', padding: 15, borderRadius: 20, marginTop: 10 }}>
            <Text style={{ color: 'white' }}>{message}</Text>
        </View>
    );
};
