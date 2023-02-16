const baseColorPalette = {
    colorBaseWhite: "#FFFFFF",
    colorBaseBlack: "#000000",
    colorBaseRed: "#610000",
    colorBaseYellow: "#FFE3B3",
    colorBaseDarkBlue: "#3278BF",
  
    colorBaseGreen: "#27AC70",
    colorBaseGold: "#DBAF2C",
    colorGrayscaleSand: "#F7F7F7",
    colorBaseSapphireYellow: "#F5F562",
  
    colorGrayscaleDust: "#FAFBFC",
    colorGrayscalePebble: "#DFDFDF",
    colorGrayscaleStone: "#AAAAAA",
    colorGrayscaleRock: "#777777",
    colorGrayscaleSlate: "#3F3F3F",
  
    colorBaseBrilliantAzure: "#3392F3",
    colorBaseLightYellow: "#FFEC00",
    colorBaseLightCyan: "#CAF4FD",
    colorBaseOlive: "#A3C67D",
    colorBaseGhostWhite: "#FAFBFC"
  };
  
  const light = 0.8;
  const lighter = 0.5;
  const lightest = 0.2;
  
  const lightenColors = {
    light,
    lighter,
    lightest
  };
  
  const guidelineColors = {
    white: baseColorPalette.colorBaseWhite,
    black: baseColorPalette.colorBaseBlack,
    blue: baseColorPalette.colorBaseDarkBlue,
    accent: {
      primary: baseColorPalette.colorBaseDarkBlue,
      secondary: baseColorPalette.colorBaseYellow,
      tertiary: baseColorPalette.colorGrayscaleSlate
    },
    states: {
      error: baseColorPalette.colorBaseRed,
      success: baseColorPalette.colorBaseGreen,
      warning: baseColorPalette.colorBaseGold,
      disable: baseColorPalette.colorGrayscaleSand,
      info: baseColorPalette.colorBaseSapphireYellow
    },
    text: {
      primary: baseColorPalette.colorGrayscaleSlate,
      secondary: baseColorPalette.colorGrayscaleRock,
      tertiary: baseColorPalette.colorGrayscaleStone
    },
    background: {
      primary: baseColorPalette.colorGrayscaleDust,
      secondary: baseColorPalette.colorGrayscaleSand
    },
    border: {
      primary: baseColorPalette.colorGrayscalePebble
    },
    shadow: {
      primary: baseColorPalette.colorGrayscalePebble
    },
    icon: {
      primary: baseColorPalette.colorGrayscaleStone,
      secondary: baseColorPalette.colorGrayscaleRock
    },
    overlay: {
      primary: baseColorPalette.colorGrayscaleSlate
    },
    lightenColors
  };
  
  export { guidelineColors };
  