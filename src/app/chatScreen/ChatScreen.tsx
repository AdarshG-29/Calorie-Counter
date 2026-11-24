import { useInput } from '@/hooks/useInput';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useGemini } from '@/hooks/useGemini';
import { extractGeminiResponseText } from '@/utils/helper';

const ChatScreen = () => {
    const { res: geminiResponse, isLoading, error, fetchGeminiResponse } = useGemini();
    const { value: inputValue, handleChange: handleInputChange } = useInput();
    
    const styles = useStyles();

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
          <Text style={styles.text}>Enter</Text>
        </Pressable>
        <View>
          {isLoading && <Text style={styles.text}>Loading...</Text>}
          {error && <Text style={styles.text}>Error: {error.message}</Text>}
          {geminiResponse && <Text style={styles.text}>{`Response: ${extractGeminiResponseText(geminiResponse)}`}</Text>}
        </View>
      </View>
    </SafeAreaView>
  )
}

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: Spacing.three,
    marginTop: Spacing.five,
  },
  input: {
    width: 200,
    height: 30,
    borderColor: theme.border,
    borderWidth: 1,
    color: theme.text,
  },
  button: {
    maxHeight: 30,
    maxWidth: 150,
    padding: Spacing.two,
    flex: 1,
    backgroundColor: theme.backgroundSelected,
    color: theme.text,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  text: {
    color: theme.text,
  }
  });
};
export default ChatScreen