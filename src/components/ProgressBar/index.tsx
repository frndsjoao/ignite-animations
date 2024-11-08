import { View } from 'react-native';

import { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from './styles';

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100);

  const sharedProgress = useSharedValue(percentage)
  const styleAnimated = useAnimatedStyle(() => {
    return { width: `${sharedProgress.value}%` }
  })

  useEffect(() => {
    sharedProgress.value = withTiming(percentage, { duration: 300 })
  }, [current])

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.progress, styleAnimated]} />
    </View>
  );
}