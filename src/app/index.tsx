import { useInput } from '@/hooks/useInput';
import { Pressable, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomTabInset, Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { useGemini } from '@/hooks/useGemini';
import { extractGeminiResponseText } from '@/utils/helper';

export default function HomeScreen() {
  const colorSheme = useColorScheme() ?? 'light';
  const theme = Colors[colorSheme];
  const { res: geminiResponse, isLoading, error, fetchGeminiResponse } = useGemini();
  const { value: inputValue, handleChange: handleInputChange } = useInput();

  const onPress = () => {
    if (!inputValue) return;
    fetchGeminiResponse(inputValue);
  };

  const onHandleInput = (e: { nativeEvent: { text: string } }) => {
    handleInputChange(e.nativeEvent.text);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          value={inputValue}
          onChange={onHandleInput}
          style={styles.input}
        />
        <Pressable
          onPress={onPress}
          style={styles.button}
          disabled={isLoading}
        >
          <Text style={{ color: theme.text }}>Enter</Text>
        </Pressable>
        <View>
          {isLoading && <Text style={{ color: theme.text }}>Loading...</Text>}
          {error && <Text style={{ color: theme.text }}>Error: {error.message}</Text>}
          {geminiResponse && <Text style={{ color: theme.text }}>{`Response: ${extractGeminiResponseText(geminiResponse)}`}</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: Spacing.three,
    marginTop: Spacing.five,
  },
  input: {
    width: 200,
    height: 30,
    borderColor: Colors.dark.text,
    borderWidth: 1,
    color: Colors.dark.text,
  },
  button: {
    maxHeight: 30,
    maxWidth: 150,
    padding: Spacing.two,
    flex: 1,
    backgroundColor: Colors.dark.backgroundSelected,
    color: Colors.light.text,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
});
