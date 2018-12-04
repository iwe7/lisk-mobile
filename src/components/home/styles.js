import { themes, colors } from '../../constants/styleGuide';

export default () => ({
  common: {
    container: {
      flex: 1,
      alignContent: 'space-around',
      backgroundColor: colors.light.white,
    },
    scrollView: {
      marginTop: -10,
    },
    accountSummary: {
      zIndex: 2,
    },
  },
  [themes.light]: {
    container: {
      backgroundColor: colors.light.white,
    },
  },
  [themes.dark]: {
    container: {
      backgroundColor: colors.dark.screenBgNavy,
    },
  },
});