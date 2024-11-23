import { useEffect } from "react"
import { View, StyleSheet, Animated } from "react-native"

export const Skeleton = () => {
    const animation = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            })
        ).start();
    }, [animation]);

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.1, 0.3],
    });

    return (
        <View style={styles.skeletonContainer}>
            <Animated.View style={[styles.skeleton, { opacity }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    skeleton: {
        flex: 1,
        backgroundColor: "#cfcfcf",
        borderRadius: 4,
    },
    skeletonContainer: {
        width: "100%",
        height: 20,
        backgroundColor: "#e0e0e0",
        borderRadius: 4,
        overflow: "hidden",
    },
})