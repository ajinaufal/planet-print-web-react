/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                target: {
                    primary: {
                        default: '#EC5800',
                        hover: '#CC4302',
                        disabled: '#FF9732',
                    },
                    secondary: {
                        default: '#FFEED3',
                        hover: '#FFDAA5',
                    },
                    tertiary: {
                        default: '#ECF0F3',
                        hover: '#DDE2E8',
                    },
                    destructive: {
                        default: '#EE4B2B',
                        default2: '#FFE4DF',
                        hover: '#C72C0E',
                        hover2: '#FFCFC5',
                        disabled: '#FF7E65',
                    },
                    invert: {
                        default: '#ECF0F3',
                        hover: '#ECF0F3',
                    },
                },
                label: {
                    primary: {
                        default: '#ECF0F3',
                        disabled: '#FFDAA5',
                    },
                    secondary: {
                        default: '#EC5800',
                        disabled: '#ECF0F3',
                    },
                    tertiary: {
                        default: '#2E3038',
                        disabled: '#8C92AC',
                    },
                    destructive: {
                        default: '#EE4B2B',
                        disabled: '#FF7E65',
                    },
                },
                border: {
                    default: {
                        primary: '#C7CFDA',
                        secondary: '#DDE2E8',
                        tertiary: '#ECF0F3',
                    },
                    accent: '#FFDAA5',
                    positive: '#C2F0D1',
                    warning: '#FFF885',
                    negative: '#FFCFC5',
                },
                background: {
                    default: '#FFFFFF',
                    secondary: '#F5F7F8',
                    tertiary: '#DDE2E8',
                    accent: '#FFEED3',
                    positive: '#E0F8E7',
                    warning: '#FFFBC5',
                    negative: '#FFE4DF',
                },
                foreground: {
                    default: {
                        primary: '#2E3038',
                        secondary: '#4F5360',
                    },
                    warning: {
                        primary: '#BB6802',
                        secondary: '#E29300',
                    },
                    invert: {
                        primary: '#F5F7F8',
                        secondary: '#DDE2E8',
                    },
                    negative: {
                        primary: '#C72C0E',
                        secondary: '#EE4B2B',
                    },
                    accent: {
                        primary: '#CC4302',
                        secondary: '#EC5800',
                    },
                    positive: {
                        primary: '#22733D',
                        secondary: '#27924C',
                    },
                },
            },
        },
    },
    plugins: [],
};
