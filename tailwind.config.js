/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1440px",
      }, 
      extend: {
         colors: {
            /* Primary */
            Very_Dark_Blue: "hsl(243, 87%, 12%)",
            Desaturated_Blue: "hsl(238, 22%, 44%)",
            /* Primary */

            /* Accent */
            Bright_Blue: "hsl(224, 93%, 58%)",
            Moderate_Cyan: "hsl(170, 45%, 43%)",
            /* Accent */

            /* Neutral */
            Light_Grayish_Blue: "hsl(240, 75%, 98%)",
            Light_Gray: "hsl(0, 0%, 75%)"
            /* Neutral */
         },
      },
   },
   plugins: [],
};
