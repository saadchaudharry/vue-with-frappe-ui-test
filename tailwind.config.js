/** @type {import('tailwindcss').Config} */

export default {
  presets: [
    require('frappe-ui/src/utils/tailwind.config')
  ], 
   content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

