import { useEffect } from "react"
import { View, StyleSheet, Animated } from "react-native"

import { Colors } from "../../model/Colors"

type SkeletonProps = {
    height?: number
    styles?: Record<string, string | number>
    width?: number
}

export const Skeleton = ({ height, styles: customStyle, width }: SkeletonProps) => {
    const animation = new Animated.Value(0)

    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            })
        ).start()
    }, [animation])

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.1, 0.3],
    })

    return (
        <View style={{ ...styles.skeletonContainer, ...customStyle, height, width }}>
            <Animated.View style={[styles.skeleton, { opacity }]} />
        </View >
    )
}

const styles = StyleSheet.create({
    skeleton: {
        flex: 1,
        backgroundColor: Colors.gray,
        borderRadius: 4,
    },
    skeletonContainer: {
        width: "100%",
        backgroundColor: Colors.lightGray,
        borderRadius: 4,
        overflow: "hidden",
    },
})