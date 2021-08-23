module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                tc: {
                    default: "#00007f",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
