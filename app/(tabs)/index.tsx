import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    setAddedToCart(true);
    router.push('/explore'); // Navigate to explore.tsx
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/boyseat3.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.bigBoldTitle}>BOYSeat</ThemedText>
      </ThemedView>
      <ThemedView style={styles.productContainer}>
        <Image
          source={require('@/assets/images/boyseat.png')}
          style={styles.productBackground}
          resizeMode="cover"
        />
        <ThemedView style={styles.productContent}>
          <ThemedText type="subtitle">Advanced Tech Motorcycle Seat</ThemedText>
          <ThemedText>
            BOYSeat automatically adjusts its temperature to maximize rider comfort. Enjoy every ride, no matter the weather!
          </ThemedText>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={handleAddToCart}
            disabled={addedToCart}
          >
            <ThemedText type="defaultSemiBold" style={{ color: '#fff' }}>
              {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    justifyContent: 'center',
  },
  bigBoldTitle: {
    fontSize: 150,
    fontWeight: 'bold',
    color: '#FFCC00', // Yellow
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    lineHeight: 210,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    padding: 0,
    backgroundColor: '#111', // Black
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFCC00', // Yellow border
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: 400,
  },
  productBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    zIndex: 0,
  },
  productContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
    zIndex: 1,
    backgroundColor: 'rgba(17,17,17,0.7)', // semi-transparent overlay
    borderRadius: 12,
    width: '100%',
    height: '100%',
  },
  cartButton: {
    marginTop: 10,
    backgroundColor: '#FFCC00', // Yellow
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000', // Black border
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#222',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFCC00',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  reactLogo: {
    display: 'none',
  },
});
