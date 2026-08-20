/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "afacad": ["Afacad Flux", "sans-serif"],
      },
      colors: {
        "Neutral-1": "#F5F6FA",
        "Neutral-2": "#F0F1F5",
        "Neutral-3": "#E6E7ED",
        "Neutral-4": "#DCDEE5",
        "Neutral-5": "#D7D9E0",
        "Neutral-6": "#C7C8D1",
        "Neutral-7": "#AEB0B8",
        "Neutral-8": "#9C9DA6",
        "Neutral-9": "#7C7E87",
        "Neutral-10": "#5C5D66",
        "Neutral-11": "#3C3D47",
        "Neutral-12": "#15161A",
      },
      fontSize: {
        "W-H1": ["56px", { lineHeight: "56px", fontWeight: 700 }],
        "W-H2": ["48px", { lineHeight: "40px", fontWeight: 700 }],
        "W-H3": ["40px", { lineHeight: "36px", fontWeight: 400 }],
        "W-H4": ["32px", { lineHeight: "36px", fontWeight: 700 }],
        "W-H5": ["26px", { lineHeight: "32px", fontWeight: 700 }],
        "W-H6": ["20px", { lineHeight: "24px", fontWeight: 700 }],
        "W-Pa1": ["16px", { lineHeight: "20px", fontWeight: 700 }],
        "W-Pa2": ["16px", { lineHeight: "20px", fontWeight: 400 }],
        "W-button": ["14px", { lineHeight: "20px", fontWeight: 700 }],
        "W-Note": ["14px", { lineHeight: "20px", fontWeight: 400 }],

        "M-H1": ["36px", { lineHeight: "36px", fontWeight: 700 }],
        "M-H2": ["28px", { lineHeight: "28px", fontWeight: 700 }],
        "M-H3": ["20px", { lineHeight: "24px", fontWeight: 700 }],
        "M-H4": ["16px", { lineHeight: "24px", fontWeight: 700 }],
        "M-H5": ["16px", { lineHeight: "24px", fontWeight: 400 }],
        "M-Pa1": ["14px", { lineHeight: "16px", fontWeight: 700 }],
        "M-Pa2": ["14px", { lineHeight: "16px", fontWeight: 400 }],
        "M-button": ["12px", { lineHeight: "16px", fontWeight: 700 }],
        "M-Note": ["12px", { lineHeight: "16px", fontWeight: 400 }],
      },
    },
  },
  plugins: [],
};
