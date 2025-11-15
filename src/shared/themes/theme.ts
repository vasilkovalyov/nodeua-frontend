import { createTheme, Theme } from "@mui/material";

function getTheme(): Theme {
  const defaultTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1280
      }
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(",")
    }
  });

  defaultTheme.typography.h1 = {
    fontSize: 30,
    lineHeight: 1.2,
    fontWeight: 400,

    [defaultTheme.breakpoints.up("lg")]: {
      fontSize: 30
    }
  };

  defaultTheme.typography.h2 = {
    fontSize: 30,
    lineHeight: 1.2,
    fontWeight: 400,

    [defaultTheme.breakpoints.up("lg")]: {
      fontSize: 30
    }
  };

  defaultTheme.typography.h3 = {
    fontSize: 24,
    lineHeight: 1.35,
    fontWeight: 400
  };

  defaultTheme.typography.h4 = {
    fontSize: 24,
    lineHeight: 1.45,
    fontWeight: 400
  };

  defaultTheme.typography.h5 = {
    fontSize: 20,
    lineHeight: 1.45,
    fontWeight: 400
  };

  defaultTheme.typography.h6 = {
    fontSize: 20,
    lineHeight: 1.2,
    fontWeight: 400
  };

  defaultTheme.typography.body1 = {
    fontSize: 18,
    lineHeight: 1.5,

    [defaultTheme.breakpoints.up("lg")]: {
      fontSize: 20
    }
  };

  defaultTheme.typography.body2 = {
    fontSize: 16,
    lineHeight: 1.35
  };

  defaultTheme.typography.caption = {
    fontSize: 14,
    lineHeight: 1.35
  };

  defaultTheme.components = {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 1170,
          paddingInline: 20,
          [defaultTheme.breakpoints.up("sm")]: {
            maxWidth: 1170,
            paddingInline: 20
          },
          [defaultTheme.breakpoints.up("md")]: {
            maxWidth: 1170,
            paddingInline: 20
          },
          [defaultTheme.breakpoints.up("lg")]: {
            maxWidth: 1170,
            paddingInline: 20
          }
        }
      }
    }
  };

  return defaultTheme;
}

export default getTheme;
