/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    primary: '#3F5F90',
    primaryContainer: '#7594C9',
    secondary: '#51643F',
    secondaryContainer: '#D1E7B8',
    tertiary: '#7A590C',
    tertiaryContainer: '#B58D3F',
    background: '#F9F9FF',
    surface: '#F9F9FF',
    surfaceBright: '#F9F9FF',
    surfaceDim: '#D9D9DF',
    surfaceVariant: '#E0E2EC',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F3F3F9',
    surfaceContainer: '#EDEDF3',
    surfaceContainerHigh: '#E8E8ED',
    surfaceContainerHighest: '#E2E2E9',
    outline: '#747780',
    outlineVariant: '#C3C6D0',
    error: '#BA1A1A',
    errorContainer: '#FFDAD6',
    inversePrimary: '#A9C7FF',
    inverseSurface: '#2F3035',
    onSurface: '#1A1C20',
    onSurfaceVariant: '#43474F',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#002B5A',
    onSecondaryContainer: '#566843',
    onErrorContainer: '#93000A',
    inverseOnSurface: '#F0F0F7',
  },
  dark: {
    primary: '#A9C7FF',
    primaryContainer: '#7594C9',
    secondary: '#B8CEA0',
    secondaryContainer: '#3A4C29',
    tertiary: '#EDC06C',
    tertiaryContainer: '#B58D3F',
    background: '#111317',
    surface: '#111317',
    surfaceBright: '#37393E',
    surfaceDim: '#111317',
    surfaceVariant: '#43474F',
    surfaceContainerLowest: '#0C0E12',
    surfaceContainerLow: '#1A1C20',
    surfaceContainer: '#1E2024',
    surfaceContainerHigh: '#282A2E',
    surfaceContainerHighest: '#333539',
    outline: '#8D909A',
    outlineVariant: '#43474F',
    error: '#FFB4AB',
    errorContainer: '#93000A',
    inversePrimary: '#3F5F90',
    inverseSurface: '#E2E2E8',
    onSurface: '#E2E2E8',
    onSurfaceVariant: '#C3C6D0',
    onPrimary: '#07305F',
    onPrimaryContainer: '#002B5A',
    onSecondaryContainer: '#A7BC90',
    onErrorContainer: '#FFDAD6',
    inverseOnSurface: '#2F3035',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Typography = {
  displayLg: { fontFamily: 'SpaceGrotesk_700Bold', fontSize: 40, lineHeight: 46, letterSpacing: -0.5 },
  headlineMd: { fontFamily: 'SpaceGrotesk_600SemiBold', fontSize: 22, lineHeight: 28, letterSpacing: -0.2 },
  titleLg: { fontFamily: 'SpaceGrotesk_600SemiBold', fontSize: 18, lineHeight: 24, letterSpacing: -0.1 },
  titleMd: { fontFamily: 'Inter_600SemiBold', fontSize: 15, lineHeight: 20, letterSpacing: 0 },
  bodyLg: { fontFamily: 'Inter_400Regular', fontSize: 16, lineHeight: 24, letterSpacing: 0 },
  bodyMd: { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 21, letterSpacing: 0 },
  bodySm: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 18, letterSpacing: 0 },
  labelLg: { fontFamily: 'Inter_500Medium', fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },
  labelSm: { fontFamily: 'Inter_500Medium', fontSize: 12, lineHeight: 16, letterSpacing: 0.2 },
  monoMd: { fontFamily: 'SpaceMono_700Bold', fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  monoSm: { fontFamily: 'SpaceMono_400Regular', fontSize: 12, lineHeight: 16, letterSpacing: 0 },
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BorderRadius = {
  small: 6,
  medium: 8,
  large: 12,
  extraLarge: 16,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
