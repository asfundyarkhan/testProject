import styles from './StyleSheet.js';
import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";


const slides = [
    {
        key: 'one',
        title: 'Title 1',
        text: 'We believe in revolutionizing the way people comunicate',
        image: require('../../assets/images/image1.jpg'),
        backgroundColor: '#59b2b7',
    },
    {
        key: 'two',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('../../assets/images/image1.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 'three',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../assets/images/image1.jpg'),
        backgroundColor: '#22bcb5',
    }
];
const _renderItem = ({ item }) => {
    return (
        <View style={styles.slide}>
            <ImageBackground source={require('../../assets/images/image2.jpg')} style={styles.background}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
            </ImageBackground>
        </View>
    );
};

const _renderNextButton = () => {
    return (
        <View>
            <Text style={styles.buttonText}>NEXT</Text>
        </View>
    );
};

const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
}

const OnBoarding = () => {
    return (
        <>
            <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} renderNextButton={_renderNextButton}
                activeDotStyle={{ backgroundColor: 'rgba(255,255,10,0.9)' }} dotStyle={{ backgroundColor: 'rgba(255, 255, 10, .5)' }} />
        </>
    )
}

export default OnBoarding;
