import { themePalette as tp } from './themePalette';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
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
                    backgroundColor: tp.arcOrange,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em',
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
                    border: `1px solid ${tp.red50}`,
                    background: tp.lightErrorLight,
                    color: tp.white,
                },
                standardSuccess: {
                    border: `1px solid ${tp.green50}`,
                    background: tp.lightSuccessLight,
                    color: tp.white,
                },
            },
        },
    },
    palette: {
        mode: 'light',
        common: {
            black: tp.black,
            white: tp.white,
        },
        primary: {
            main: tp.lightPrimaryMain,
            light: tp.lightPrimaryLight,
            dark: tp.lightPrimaryDark,
            contrastText: tp.lightPrimaryContrastTxt,
        },
        secondary: {
            main: tp.lightSecondaryMain,
            light: tp.lightSecondaryLight,
            dark: tp.lightSecondaryDark,
            contrastText: tp.lightSecondaryContrastTxt,
        },
        error: {
            main: tp.red50,
            light: tp.lightErrorLight,
            dark: tp.lightErrorDark,
            contrastText: tp.lightErrorContrastTxt,
        },
        warning: {
            main: tp.amber50,
            light: tp.lightWarningLight,
            dark: tp.lightWarningDark,
            contrastText: tp.lightWarningContrastTxt,
        },
        info: {
            main: tp.lightBlue50,
            light: tp.lightInfoLight,
            dark: tp.lightInfoDark,
            contrastText: tp.lightInfoContrastTxt,
        },
        success: {
            main: tp.green50,
            light: tp.lightSuccessLight,
            dark: tp.lightSuccessDark,
            contrastText: tp.lightSuccessContrastTxt,
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
            primary: tp.lightTextPrimary,
            secondary: tp.lightTextSecondary,
            disabled: tp.lightTextDisabled,
        },
        divider: tp.lightDivider,
        background: {
            paper: tp.lightBackgroundPaper,
            default: tp.lightBackgroundDefault,
        },
        action: {
            active: tp.lightActionActive,
            hover: tp.lightActionHover,
            hoverOpacity: 0.04,
            selected: tp.lightActionSelected,
            selectedOpacity: 0.08,
            disabled: tp.lightActionDisabled,
            disabledBackground: tp.lightActionDisabledBackground,
            disabledOpacity: 0.38,
            focus: tp.lightActionFocus,
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
