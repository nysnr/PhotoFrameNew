import { Platform } from 'react-native';

const env = (typeof process !== 'undefined' && process.env) ? process.env : {};

// ENABLE_ADS: default true unless explicitly set to 'false'
// Prefer Expo public env vars; fallback to legacy names
const ENABLE_ADS_RAW = env.EXPO_PUBLIC_ENABLE_ADS ?? env.ENABLE_ADS ?? 'true';
export const ENABLE_ADS = String(ENABLE_ADS_RAW).toLowerCase() !== 'false';

// Use provided ad unit ID, fallback to Google test units for dev
export const BANNER_AD_UNIT_ID = (env.EXPO_PUBLIC_BANNER_AD_UNIT_ID ?? env.BANNER_AD_UNIT_ID) ?? (
  Platform.OS === 'ios'
    ? 'ca-app-pub-3940256099942544/2934735716' // iOS test banner
    : 'ca-app-pub-3940256099942544/6300978111' // Android test banner
);