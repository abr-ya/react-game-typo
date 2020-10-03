const shareStyles = {
  accentColor: '#e16365',
  mainTextH: 0,
  mainTextS: '0%',
};

export const darkTheme = {
  mainBgColor: '#333', // notUsed
  mainTextColor: '#f9f9f9', // notUsed
  mainTextL: '95%',
  mainBgL: '30%',
  mainBgLHover: '60%',
  ...shareStyles,
};

export const lightTheme = {
  mainBgColor: '#f9f9f9', // notUsed
  mainTextColor: 'hsl(0, 0%, 20%)', // #333
  mainTextL: '30%',
  mainBgL: '95%',
  mainBgLHover: '90%',
  ...shareStyles,
};
