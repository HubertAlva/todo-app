import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "hsl(220, 98%, 61%)",
                light: {
                    100: "hsl(0, 0%, 98%)",
                    200: "hsl(236, 33%, 92%)",
                    300: "hsl(233, 11%, 84%)",
                    400: "hsl(236, 9%, 61%)",
                    500: "hsl(235, 19%, 35%)",
                },
                dark: {
                    100: "hsl(234, 39%, 85%)",
                    200: "hsl(236, 33%, 92%)",
                    300: "hsl(234, 11%, 52%)",
                    400: "hsl(233, 14%, 35%)",
                    500: "hsl(237, 14%, 26%)",
                    600: "hsl(235, 24%, 19%)",
                    700: "hsl(235, 21%, 11%)",
                },
            },
            backgroundImage: {
                "main-s-light": "url('/images/bg-mobile-light.jpg')",
                "main-s-dark": "url('/images/bg-mobile-dark.jpg')",
                "main-l-light": "url('/images/bg-desktop-light.jpg')",
                "main-l-dark": "url('/images/bg-desktop-dark.jpg')",
                "check-gradient":
                    "linear-gradient(160deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
            },
        },
    },

    plugins: [forms],
};
