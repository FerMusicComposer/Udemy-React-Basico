import { createTheme } from '@mui/material';
import { themePalette as tp } from './themePalette';

export const darkTheme = createTheme({
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
        unit: 'px',
    },
    direction: 'ltr',
    components: {
        MuiContainer: {
            defaultProps: {
                style: {
                    paddingLeft: '10px',
                    paddingRight: '10px',
                },
            },
        },
        MuiTab: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    minWidth: 10,
                    marginLeft: 'auto',
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                style: {
                    backgroundColor: tp.dark1,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em',
                    background: tp.lightBlue800,
                    color: tp.darkTextPrimary,
                },
            },
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: '0.8em',
                    fontSize: '1em',
                },
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${tp.darkErrorMain}`,
                    background: tp.darkErrorLight,
                    color: tp.red50,
                },
                standardSuccess: {
                    border: `1px solid ${tp.darkSuccessMain}`,
                    background: tp.darkSuccessLight,
                    color: tp.lightGreen50,
                },
            },
        },
    },
    palette: {
        mode: 'dark',
        common: {
            black: tp.black,
            white: tp.white,
        },
        primary: {
            main: tp.darkPrimaryMain,
            dark: tp.darkPrimaryDark,
            light: tp.darkPrimaryLight,
            contrastText: tp.darkPrimaryContrastTxt,
        },
        secondary: {
            main: tp.darkSecondaryMain,
            dark: tp.darkSecondaryDark,
            light: tp.darkSecondaryLight,
            contrastText: tp.darkSecondaryContrastTxt,
        },
        error: {
            main: tp.darkErrorMain,
            dark: tp.darkErrorDark,
            light: tp.darkErrorLight,
            contrastText: tp.darkErrorContrastTxt,
        },
        warning: {
            main: tp.darkWarningMain,
            dark: tp.darkWarningDark,
            light: tp.darkWarningLight,
            contrastText: tp.darkWarningContrastTxt,
        },
        info: {
            main: tp.darkInfoMain,
            dark: tp.darkInfoDark,
            light: tp.darkInfoLight,
            contrastText: tp.darkInfoContrastTxt,
        },
        success: {
            main: tp.darkSuccessMain,
            dark: tp.darkSuccessDark,
            light: tp.darkSuccessLight,
            contrastText: tp.darkSuccessContrastTxt,
        },
        grey: {
            50: tp.grey50,
            100: tp.grey100,
            200: tp.grey200,
            300: tp.grey300,
            400: tp.grey400,
            500: tp.grey500,
            600: tp.grey600,
            700: tp.grey700,
            800: tp.grey800,
            900: tp.grey900,
        },
        text: {
            primary: tp.darkTextPrimary,
            secondary: tp.darkTextSecondary,
            disabled: tp.darkTextDisabled,
        },
        divider: tp.darkDivider,
        background: {
            paper: tp.darkBackgroundPaper,
            default: tp.darkBackgroundDefault,
        },
        action: {
            active: tp.darkActionActive,
            hover: tp.darkActionHover,
            hoverOpacity: 0.04,
            selected: tp.darkActionSelected,
            selectedOpacity: 0.08,
            disabled: tp.darkActionDisabled,
            disabledBackground: tp.darkActionDisabledBackground,
            disabledOpacity: 0.38,
            focus: tp.darkActionFocus,
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
    },
    typography: {
        htmlFontSize: 16,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
});
