import { StyleSheet, Platform } from 'react-native';

const globalStyle = StyleSheet.create({
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});

export default globalStyle;