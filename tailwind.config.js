/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      primary: {
        100: "#f4f4fb",
        150: "#e5e4f6",
        200: "#d7d4f0",
        250: "#c8c5eb",
        300: "#b9b5e5",
        350: "#aba6e0",
        400: "#9c96da",
        450: "#8d87d5",
        500: "#7d76cf",
        550: "#6960c7",
        600: "#5349bf",
        650: "#463cac",
        700: "#3c3495",
        750: "#332c7e",
        800: "#2a2467",
        850: "#201c50",
        900: "#171438",
        DEFAULT: "#7d76cf",
      },
      secondary: {
        100: "#f1f9fe",
        150: "#d7effb",
        200: "#bee5f9",
        250: "#a4dbf6",
        300: "#8bd1f4",
        350: "#71c6f1",
        400: "#58bcee",
        450: "#3eb2ec",
        500: "#27a8e9",
        550: "#169adc",
        600: "#1388c2",
        650: "#1176a8",
        700: "#0e648f",
        750: "#0c5275",
        800: "#09405b",
        850: "#062e41",
        900: "#041c27",
        DEFAULT: "#27a8e9",
      },
      info: {
        100: "#f1f8fd",
        150: "#daecfa",
        200: "#c3e1f8",
        250: "#acd5f5",
        300: "#94c9f2",
        350: "#7dbeef",
        400: "#66b2ec",
        450: "#4fa6e9",
        500: "#379ae6",
        550: "#1d8de3",
        600: "#197dca",
        650: "#166db0",
        700: "#125d95",
        750: "#0f4c7b",
        800: "#0c3c61",
        850: "#092c47",
        900: "#061c2d",
        DEFAULT: "#379ae6",
      },
      warning: {
        100: "#fef9ee",
        150: "#fcf0d7",
        200: "#fae7c0",
        250: "#f8dea9",
        300: "#f6d491",
        350: "#f4cb7a",
        400: "#f2c263",
        450: "#f0b94b",
        500: "#efb034",
        550: "#eca517",
        600: "#d29211",
        650: "#b57e0f",
        700: "#98690c",
        750: "#7a550a",
        800: "#5d4108",
        850: "#402c05",
        900: "#221803",
        DEFAULT: "#efb034",
      },
      danger: {
        100: "#fdf2f2",
        150: "#f9dbdc",
        200: "#f5c4c6",
        250: "#f1adaf",
        300: "#ed9699",
        350: "#e97f83",
        400: "#e5696d",
        450: "#e25256",
        500: "#de3b40",
        550: "#d9252b",
        600: "#c12126",
        650: "#aa1d22",
        700: "#93191d",
        750: "#7b1518",
        800: "#641114",
        850: "#4d0d0f",
        900: "#36090b",
        DEFAULT: "#de3b40",
      },
      success: {
        100: "#eefdf3",
        150: "#d3f9e0",
        200: "#b8f5cd",
        250: "#9df2b9",
        300: "#82eea6",
        350: "#67ea93",
        400: "#4ce77f",
        450: "#31e36c",
        500: "#1dd75b",
        550: "#1ac052",
        600: "#17a948",
        650: "#14923e",
        700: "#117b34",
        750: "#0e642a",
        800: "#0a4d20",
        850: "#073517",
        900: "#041e0d",
        DEFAULT: "#1dd75b",
      },
      "color-1": {
        100: "#f1fbfd",
        150: "#d6f5f8",
        200: "#bbeef4",
        250: "#a1e8f0",
        300: "#86e1eb",
        350: "#6bdbe7",
        400: "#50d4e3",
        450: "#36cdde",
        500: "#23c2d3",
        550: "#1facbc",
        600: "#1b98a6",
        650: "#17838f",
        700: "#146f79",
        750: "#105a62",
        800: "#0c464c",
        850: "#093135",
        900: "#051c1f",
        DEFAULT: "#23c2d3",
      },
      "color-2": {
        100: "#fef8f0",
        150: "#fdedd5",
        200: "#fce2ba",
        250: "#fbd6a0",
        300: "#f9cb85",
        350: "#f8bf6a",
        400: "#f7b44f",
        450: "#f5a835",
        500: "#f49d1a",
        550: "#e68f0b",
        600: "#cb7d0a",
        650: "#af6c08",
        700: "#935b07",
        750: "#784a06",
        800: "#5c3904",
        850: "#402803",
        900: "#241602",
        DEFAULT: "#f49d1a",
      },
      "color-3": {
        100: "#fff0f7",
        150: "#ffd7ea",
        200: "#ffbedd",
        250: "#ffa5d1",
        300: "#ff8cc4",
        350: "#ff73b7",
        400: "#ff5aaa",
        450: "#ff429d",
        500: "#ff2b91",
        550: "#ff0b81",
        600: "#ec0072",
        650: "#cf0064",
        700: "#b10056",
        750: "#930047",
        800: "#760039",
        850: "#58002b",
        900: "#3a001c",
        DEFAULT: "#ff2b91",
      },
      "color-crema": {
        DEFAULT: "#fff0c9",
      },
      "color-cafe-oscuro": {
        100: "#fff7f0",
        150: "#ffdbb6",
        200: "#ffbe7d",
        250: "#ffa143",
        300: "#ff850a",
        350: "#d06800",
        400: "#964b00",
        450: "#5d2f00",
        500: "#241200",
        550: "#241200",
        600: "#251200",
        650: "#261300",
        700: "#261300",
        750: "#271300",
        800: "#281400",
        850: "#281400",
        900: "#291400",
        DEFAULT: "#241200",
      },
      "color-cafe-claro": {
        100: "#fff7f0",
        150: "#ffddbc",
        200: "#ffc488",
        250: "#ffaa55",
        300: "#ff9021",
        350: "#ec7600",
        400: "#b95c00",
        450: "#854300",
        500: "#512800",
        550: "#4d2600",
        600: "#472400",
        650: "#422100",
        700: "#3d1f00",
        750: "#381c00",
        800: "#331a00",
        850: "#2e1700",
        900: "#291400",
        DEFAULT: "#512800",
      },
      mocha: {
        DEFAULT: "#bb9457",
      },
      rojizo: {
        DEFAULT: "#6f1d1b",
      },
      logOut: {
        DEFAULT: "linear-gradient(145deg, #ee3f44, #c8353a)",
      },
    },
    extend: {
      fontFamily: {
        OpenSans: "Open Sans",
        Manrope: "Manrope",
        Russo: "Russo One",
      },
      boxShadow: {
        neumorphicBar: "7px -7px 15px #c7bb9d,-7px 7px 15px #ffffd7",
        neumorphicButton: "inset 6px 6px 6px #251200, inset -6px -6px 6px #422100",
        neumorphicActiveButton: "inset 5px 5px 10px #401110,inset -5px -5px 10px #9e2926",
        neumorphicTable: "6px 6px 12px #201000,-6px -6px 12px #824000",
        neumorphicLogOutButton: "inset -1px -1px 10px #59181a,inset 5px 5px 10px #ff5e66",
        neumorphicTr: "7px 7px 21px #391c00,-7px -7px 21px #693400",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
