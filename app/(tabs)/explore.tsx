import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
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
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Order BOYSeat</ThemedText>
        <ThemedText style={styles.desc}>
          You are about to order <ThemedText style={styles.bold}>BOYSeat</ThemedText> — the advanced tech motorcycle seat that automatically adjusts its temperature for your comfort.
        </ThemedText>
        <View style={styles.orderBox}>
          <ThemedText style={styles.label}>Product:</ThemedText>
          <ThemedText style={styles.value}>BOYSeat</ThemedText>
          <ThemedText style={styles.label}>Price:</ThemedText>
          <ThemedText style={styles.value}>₱12,999</ThemedText>
          <ThemedText style={styles.label}>Quantity:</ThemedText>
          <ThemedText style={styles.value}>1</ThemedText>
          <TouchableOpacity style={styles.orderButton}>
            <ThemedText type="defaultSemiBold" style={{ color: '#fff' }}>
              Place Order
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFCC00',
    marginBottom: 24,
  },
  desc: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: '#FFCC00',
  },
  orderBox: {
    backgroundColor: '#222',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFCC00',
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    gap: 12,
  },
  label: {
    color: '#FFCC00',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },
  value: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 8,
  },
  orderButton: {
    marginTop: 24,
    backgroundColor: '#FFCC00',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
});
