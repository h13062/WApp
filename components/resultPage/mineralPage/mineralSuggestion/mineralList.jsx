const mineralGroups = {
  Ca: {
    years: {
      "0–6 mo": { male: 200, female: 200 },
      "7–12 mo": { male: 260, female: 260 },
      "1–3 y": { male: 700, female: 700 },
      "4–8 y": { male: 1000, female: 1000 },
      "9–13 y": { male: 1300, female: 1300 },
      "14–18 y": { male: 1300, female: 1300 },
      "19–30 y": { male: 1000, female: 1000 },
      "31–50 y": { male: 1000, female: 1000 },
      "51–70 y": { male: 1000, female: 1200 },
      "> 70 y": { male: 1200, female: 1200 },
    },
    months: {
      "0–6 mo": { male: 125, female: 125 },
      "6–12 mo": { male: 150, female: 150 },
    },
    pregnancy: {
      "14–18 y": { male: 1300, female: 1300 },
      "19–30 y": { male: 1000, female: 1000 },
      "31–50 y": { male: 1000, female: 1000 },
    },
    lactation: {
      "14–18 y": { male: 1300, female: 1300 },
      "19–30 y": { male: 1000, female: 1000 },
      "31–50 y": { male: 1000, female: 1000 },
    },
  },

  Cr: {
    years: {
      "0–6 mo": { male: 0.2, female: 0.2 },
      "7–12 mo": { male: 5.5, female: 5.5 },
      "1–3 y": { male: 11, female: 11 },
      "4–8 y": { male: 15, female: 15 },
      "9–13 y": { male: 25, female: 21 },
      "14–18 y": { male: 35, female: 24 },
      "19–30 y": { male: 35, female: 25 },
      "31–50 y": { male: 35, female: 25 },
      "51–70 y": { male: 30, female: 20 },
      "> 70 y": { male: 30, female: 20 },
    },
    pregnancy: {
      "14–18 y": { female: 29 },
      "19–30 y": { female: 30 },
      "31–50 y": { female: 30 },
    },
    lactation: {
      "14–18 y": { female: 44 },
      "19–30 y": { female: 45 },
      "31–50 y": { female: 45 },
    },
  },

  Cu: {
    years: {
      "0–6 mo": { male: 200, female: 200 },
      "7–12 mo": { male: 220, female: 220 },
      "1–3 y": { male: 340, female: 340 },
      "4–8 y": { male: 440, female: 440 },
      "9–13 y": { male: 700, female: 700 },
      "14–18 y": { male: 890, female: 890 },
      "19–30 y": { male: 900, female: 900 },
      "31–50 y": { male: 900, female: 900 },
      "51–70 y": { male: 900, female: 900 },
      "> 70 y": { male: 900, female: 900 },
    },
    pregnancy: {
      "14–18 y": { female: 1000 },
      "19–30 y": { female: 1000 },
      "31–50 y": { female: 1000 },
    },
    lactation: {
      "14–18 y": { female: 1300 },
      "19–30 y": { female: 1300 },
      "31–50 y": { female: 1300 },
    },
  },

  F: {
    years: {
      "0–6 mo": { male: 0.01, female: 0.01 },
      "7–12 mo": { male: 0.5, female: 0.5 },
      "1–3 y": { male: 0.7, female: 0.7 },
      "4–8 y": { male: 1, female: 1 },
      "9–13 y": { male: 2, female: 2 },
      "14–18 y": { male: 3, female: 3 },
      "19–30 y": { male: 4, female: 3 },
      "31–50 y": { male: 4, female: 3 },
      "51–70 y": { male: 4, female: 3 },
      "> 70 y": { male: 4, female: 3 },
    },
    pregnancy: {
      "14–18 y": { female: 3 },
      "19–30 y": { female: 3 },
      "31–50 y": { female: 3 },
    },
    lactation: {
      "14–18 y": { female: 3 },
      "19–30 y": { female: 3 },
      "31–50 y": { female: 3 },
    },
  },

  Iodine: {
    years: {
      "0–6 mo": { male: 110, female: 110 },
      "7–12 mo": { male: 130, female: 130 },
      "1–3 y": { male: 90, female: 90 },
      "4–8 y": { male: 90, female: 90 },
      "9–13 y": { male: 120, female: 120 },
      "14–18 y": { male: 150, female: 150 },
      "19–30 y": { male: 150, female: 150 },
      "31–50 y": { male: 150, female: 150 },
      "51–70 y": { male: 150, female: 150 },
      "> 70 y": { male: 150, female: 150 },
    },
    pregnancy: {
      "14–18 y": { female: 220 },
      "19–30 y": { female: 220 },
      "31–50 y": { female: 220 },
    },
    lactation: {
      "14–18 y": { female: 290 },
      "19–30 y": { female: 290 },
      "31–50 y": { female: 290 },
    },
  },

  Fe: {
    years: {
      "0–6 mo": { male: 0.27, female: 0.27 },
      "7–12 mo": { male: 11, female: 11 },
      "1–3 y": { male: 7, female: 7 },
      "4–8 y": { male: 10, female: 10 },
      "9–13 y": { male: 8, female: 8 },
      "14–18 y": { male: 11, female: 15 },
      "19–30 y": { male: 8, female: 18 },
      "31–50 y": { male: 8, female: 18 },
      "51–70 y": { male: 8, female: 8 },
      "> 70 y": { male: 8, female: 8 },
    },
    pregnancy: {
      "14–18 y": { female: 27 },
      "19–30 y": { female: 27 },
      "31–50 y": { female: 27 },
    },
    lactation: {
      "14–18 y": { female: 10 },
      "19–30 y": { female: 9 },
      "31–50 y": { female: 9 },
    },
  },

  Mg: {
    years: {
      "0–6 mo": { male: 30, female: 30 },
      "7–12 mo": { male: 75, female: 75 },
      "1–3 y": { male: 80, female: 80 },
      "4–8 y": { male: 130, female: 130 },
      "9–13 y": { male: 240, female: 240 },
      "14–18 y": { male: 410, female: 360 },
      "19–30 y": { male: 400, female: 310 },
      "31–50 y": { male: 420, female: 320 },
      "51–70 y": { male: 420, female: 320 },
      "> 70 y": { male: 420, female: 320 },
    },
    pregnancy: {
      "14–18 y": { female: 400 },
      "19–30 y": { female: 350 },
      "31–50 y": { female: 360 },
    },
    lactation: {
      "14–18 y": { female: 360 },
      "19–30 y": { female: 310 },
      "31–50 y": { female: 320 },
    },
  },

  Mn: {
    years: {
      "0–6 mo": { male: 0.003, female: 0.003 },
      "7–12 mo": { male: 0.6, female: 0.6 },
      "1–3 y": { male: 1.2, female: 1.2 },
      "4–8 y": { male: 1.5, female: 1.5 },
      "9–13 y": { male: 1.9, female: 1.6 },
      "14–18 y": { male: 2.2, female: 1.6 },
      "19–30 y": { male: 2.3, female: 1.8 },
      "31–50 y": { male: 2.3, female: 1.8 },
      "51–70 y": { male: 2.3, female: 1.8 },
      "> 70 y": { male: 2.3, female: 1.8 },
    },
    pregnancy: {
      "14–18 y": { female: 2.0 },
      "19–30 y": { female: 2.0 },
      "31–50 y": { female: 2.0 },
    },
    lactation: {
      "14–18 y": { female: 2.6 },
      "19–30 y": { female: 2.6 },
      "31–50 y": { female: 2.6 },
    },
  },

  Mo: {
    years: {
      "0–6 mo": { male: 2, female: 2 },
      "7–12 mo": { male: 3, female: 3 },
      "1–3 y": { male: 17, female: 17 },
      "4–8 y": { male: 22, female: 22 },
      "9–13 y": { male: 34, female: 34 },
      "14–18 y": { male: 43, female: 43 },
      "19–30 y": { male: 45, female: 45 },
      "31–50 y": { male: 45, female: 45 },
      "51–70 y": { male: 45, female: 45 },
      "> 70 y": { male: 45, female: 45 },
    },
    pregnancy: {
      "14–18 y": { female: 50 },
      "19–30 y": { female: 50 },
      "31–50 y": { female: 50 },
    },
    lactation: {
      "14–18 y": { female: 50 },
      "19–30 y": { female: 50 },
      "31–50 y": { female: 50 },
    },
  },

  P: {
    years: {
      "0–6 mo": { male: 100, female: 100 },
      "7–12 mo": { male: 275, female: 275 },
      "1–3 y": { male: 460, female: 460 },
      "4–8 y": { male: 500, female: 500 },
      "9–13 y": { male: 1250, female: 1250 },
      "14–18 y": { male: 1250, female: 1250 },
      "19–30 y": { male: 700, female: 700 },
      "31–50 y": { male: 700, female: 700 },
      "51–70 y": { male: 700, female: 700 },
      "> 70 y": { male: 700, female: 700 },
    },
    pregnancy: {
      "14–18 y": { female: 1250 },
      "19–30 y": { female: 1250 },
      "31–50 y": { female: 700 },
    },
    lactation: {
      "14–18 y": { female: 1250 },
      "19–30 y": { female: 700 },
      "31–50 y": { female: 700 },
    },
  },

  Se: {
    years: {
      "0–6 mo": { male: 15, female: 15 },
      "7–12 mo": { male: 20, female: 20 },
      "1–3 y": { male: 20, female: 20 },
      "4–8 y": { male: 30, female: 30 },
      "9–13 y": { male: 40, female: 40 },
      "14–18 y": { male: 55, female: 55 },
      "19–30 y": { male: 55, female: 55 },
      "31–50 y": { male: 55, female: 55 },
      "51–70 y": { male: 55, female: 55 },
      "> 70 y": { male: 55, female: 55 },
    },
    pregnancy: {
      "14–18 y": { female: 40 },
      "19–30 y": { female: 55 },
      "31–50 y": { female: 55 },
    },
    lactation: {
      "14–18 y": { female: 60 },
      "19–30 y": { female: 60 },
      "31–50 y": { female: 60 },
    },
  },

  Zn: {
    years: {
      "0–6 mo": { male: 2, female: 2 },
      "7–12 mo": { male: 3, female: 3 },
      "1–3 y": { male: 3, female: 3 },
      "4–8 y": { male: 5, female: 5 },
      "9–13 y": { male: 8, female: 8 },
      "14–18 y": { male: 11, female: 11 },
      "19–30 y": { male: 11, female: 11 },
      "31–50 y": { male: 11, female: 11 },
      "51–70 y": { male: 11, female: 11 },
      "> 70 y": { male: 11, female: 11 },
    },
    pregnancy: {
      "14–18 y": { female: 8 },
      "19–30 y": { female: 9 },
      "31–50 y": { female: 8 },
    },
    lactation: {
      "14–18 y": { female: 12 },
      "19–30 y": { female: 11 },
      "31–50 y": { female: 11 },
    },
  },

  K: {
    years: {
      "0–6 mo": { male: 400, female: 400 },
      "7–12 mo": { male: 860, female: 860 },
      "1–3 y": { male: 2000, female: 2000 },
      "4–8 y": { male: 2300, female: 2300 },
      "9–13 y": { male: 2500, female: 2500 },
      "14–18 y": { male: 3000, female: 3000 },
      "19–30 y": { male: 3400, female: 3400 },
      "31–50 y": { male: 3400, female: 3400 },
      "51–70 y": { male: 3400, female: 3400 },
      "> 70 y": { male: 3400, female: 3400 },
    },
    pregnancy: {
      "14–18 y": { female: 2300 },
      "19–30 y": { female: 2300 },
      "31–50 y": { female: 2600 },
    },
    lactation: {
      "14–18 y": { female: 2600 },
      "19–30 y": { female: 2600 },
      "31–50 y": { female: 2900 },
    },
  },

  Na: {
    years: {
      "0–6 mo": { male: 110, female: 110 },
      "7–12 mo": { male: 370, female: 370 },
      "1–3 y": { male: 800, female: 800 },
      "4–8 y": { male: 1000, female: 1000 },
      "9–13 y": { male: 1200, female: 1200 },
      "14–18 y": { male: 1500, female: 1500 },
      "19–30 y": { male: 1500, female: 1500 },
      "31–50 y": { male: 1500, female: 1500 },
      "51–70 y": { male: 1500, female: 1500 },
      "> 70 y": { male: 1500, female: 1500 },
    },
    pregnancy: {
      "14–18 y": { female: 1500 },
      "19–30 y": { female: 1500 },
      "31–50 y": { female: 1500 },
    },
    lactation: {
      "14–18 y": { female: 1500 },
      "19–30 y": { female: 1500 },
      "31–50 y": { female: 1500 },
    },
  },

  Cl: {
    years: {
      "0–6 mo": { male: 0.18, female: 0.18 },
      "7–12 mo": { male: 0.57, female: 0.57 },
      "1–3 y": { male: 1.5, female: 1.5 },
      "4–8 y": { male: 1.9, female: 1.9 },
      "9–13 y": { male: 2.3, female: 2.3 },
      "14–18 y": { male: 2.3, female: 2.3 },
      "19–30 y": { male: 2.3, female: 2.3 },
      "31–50 y": { male: 2.3, female: 2.3 },
      "51–70 y": { male: 2.0, female: 2.0 },
      "> 70 y": { male: 1.8, female: 1.8 },
    },
    pregnancy: {
      "14–18 y": { female: 2.3 },
      "19–30 y": { female: 2.3 },
      "31–50 y": { female: 2.3 },
    },
    lactation: {
      "14–18 y": { female: 2.3 },
      "19–30 y": { female: 2.3 },
      "31–50 y": { female: 2.3 },
    },
  },
};

export { mineralGroups };
