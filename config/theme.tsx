export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
    };
    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
    // ... other theme properties
  }
  
  export const theme: Theme = {
    colors: {
      primary: '#c5cae9',
      secondary: '#ffccbc',
      background: '#F5FCFF',
    },
    fonts: {
      regular: 'Poppins-Light',
      medium: 'Poppins-Regular',
      bold: 'Poppins-Medium',
    },
    // ...
  };
  