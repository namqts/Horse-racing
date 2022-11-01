import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const COLORS = {
  primary: "#37A372", // Green
  secondary: "#2C2C2C", // Gray
  backColar: "#Ffeed2",
  lightPurple: "#7B789F",

  purple: "#3348D0",
  purple1: "#595683",

  yellow: "#F1CD7C",
  yellow1: "#FF9900",

  blue: "#00CDEC",

  lightYellow: "#FFD88A",
  white: "#ffffff",
  white1: "#F1E6D8",
  white2: "#FCFCFC",
  white3: "#F8F8F8",
  white4: "#F2F2F2",

  lightGreen: "#7EBDA2",
  lightGreen2: "#BED2BB",
  red: "#D84035",
  red2: "#FF7363",
  black: "#000000",
  gray: "#6E6E6E",
  gray1: "#363636",
  gray2: "#4B4B4B",
  gray3: "#4D4D4D",
  gray4: "#D0D0D0",
  gray5: "#A4A4A4",
  gray6: "#B3B3B3",
  gray7: "#5F5F5F",

  grayBlue: "#353C3E",
  grayBluelight: "#555B61",
  grayBlueDark: "#13191D",

  grayGreen: "#959796",
  grayRed: "#8E8E8E",

  lightGray: "#3B3B3B",
  lightGray2: "#707070",
  lightGray3: "#f0f0f0",

  pink: "#D993B4",
  lightPink: "#F3DEE8",

  transparentWhite: "rgba(255, 255, 255, 0.5)",
  transparentBlack: "rgba(223, 230, 233, 0.25)",
  transparent: "rgba(0, 0, 0, 0.5)",

  transparent1: "rgba(0, 0, 0, 0.25)",

  transparentBlur: "rgba(0, 20, 30, 0.75)",

  stroke: "rgba(223, 230, 233, 0.12)",

  grey: "rgba(88, 88, 88, 0.5)",
  ral: "rgba(56, 56, 56, 0.5)",

  blueDark: "rgba(0, 20, 31, 0.98)",

  silver: "#373F4F",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,

  barTitle: 28,

  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },

  barTitle: {
    fontFamily: "Inter",
    fontSize: SIZES.barTitle,
    lineHeight: 42,
    letterSpacing: -0.02,
  },

  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Inter", fontSize: SIZES.h3, lineHeight: 24 },
  body1: { fontFamily: "Inter", fontSize: SIZES.body3, lineHeight: 19 },
  body2: { fontFamily: "Inter", fontSize: SIZES.body2, lineHeight: 24 },
  body3: { fontFamily: "Inter", fontSize: SIZES.body3, lineHeight: 24 },
  body4: { fontFamily: "Inter", fontSize: SIZES.body4, lineHeight: 24 },
  body5: { fontFamily: "Inter", fontSize: SIZES.body5, lineHeight: 18 },
  body6: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: SIZES.body6,
    lineHeight: 14,
    textAlign: "center",
    letterSpacing: 0.02,
    color: "#FFFFFF",
  },
};

export const darkTheme = {
  name: "dark",
  backgroundColor: COLORS.secondary,
  textColor: COLORS.white,
  tabBackgroundColor: COLORS.lightGray,
  cardBackgroundColor: COLORS.gray3,
  bottomTabBarBackgroundColor: COLORS.gray3,
  headerColor: COLORS.yellow,
};

export const lightTheme = {
  name: "light",
  backgroundColor: COLORS.lightGray3,
  textColor: COLORS.black,
  tabBackgroundColor: COLORS.yellow,
  cardBackgroundColor: COLORS.lightYellow,
  bottomTabBarBackgroundColor: COLORS.lightYellow,
  headerColor: COLORS.red,
};

export const selectedTheme = darkTheme;

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
