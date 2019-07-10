const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    prefix: 'pr-',
    important: false,
    separator: ':',
    theme: {
        screens: {
            ...defaultTheme.screens,
        },
        colors: {
            ...defaultTheme.colors,
        },
        spacing: {
            ...defaultTheme.spacing,
        },
        backgroundColor: theme => theme('colors'),
        backgroundPosition: {
            ...defaultTheme.backgroundPosition,
        },
        backgroundSize: {
            ...defaultTheme.backgroundSize,
        },
        borderColor: theme => ({
            ...theme('colors'),
            default: theme('colors.gray.300', 'currentColor'),
        }),
        borderRadius: {
            ...defaultTheme.borderRadius,
        },
        borderWidth: {
            ...defaultTheme.borderWidth,
        },
        boxShadow: {
            ...defaultTheme.boxShadow,
        },
        container: {},
        cursor: {
            ...defaultTheme.cursor,
        },
        fill: {
            ...defaultTheme.fill,
        },
        flex: {
            ...defaultTheme.flex,
        },
        flexGrow: {
            ...defaultTheme.flexGrow,
        },
        flexShrink: {
            ...defaultTheme.flexShrink,
        },
        fontFamily: {
            ...defaultTheme.fontFamily,
        },
        fontSize: {
            ...defaultTheme.fontSize,
        },
        fontWeight: {
            ...defaultTheme.fontWeight,
        },
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        inset: {
            ...defaultTheme.inset,
        },
        letterSpacing: {
            ...defaultTheme.letterSpacing,
        },
        lineHeight: {
            ...defaultTheme.lineHeight,
        },
        listStyleType: {
            ...defaultTheme.listStyleType,
        },
        margin: (theme, {negative}) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        maxHeight: {
            ...defaultTheme.maxHeight,
        },
        maxWidth: {
            ...defaultTheme.maxWidth,
        },
        minHeight: {
            ...defaultTheme.minHeight,
        },
        minWidth: {
            ...defaultTheme.minWidth,
        },
        objectPosition: {
            ...defaultTheme.objectPosition,
        },
        opacity: {
            ...defaultTheme.opacity,
        },
        order: {
            ...defaultTheme.order,
        },
        padding: theme => theme('spacing'),
        stroke: {
            current: 'currentColor',
        },
        textColor: theme => theme('colors'),
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw',
        }),
        zIndex: {
            ...defaultTheme.zIndex,
        },
    },
    variants: {
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        cursor: ['responsive'],
        display: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        stroke: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
    },
    corePlugins: {},
    plugins: [],
};
