const vitaminGroups = {
  A: {
    years: {
      "1–3 y": { male: 300, female: 300 },
      "4–8 y": { male: 400, female: 400 },
      "9–13 y": { male: 600, female: 600 },
      "14–18 y": { male: 900, female: 700 },
      "19–30 y": { male: 900, female: 700 },
      "31–50 y": { male: 900, female: 700 },
      "51–70 y": { male: 900, female: 700 },
      "> 70 y": { male: 900, female: 700 },
    },
    months: {
      "0–6 mo": { male: 0.7, female: 0.7 },
      "6–12 mo": { male: 0.8, female: 0.8 },
    },
    pregnancy: {
      "14–18 y": { female: 750 },
      "19–30 y": { female: 770 },
      "31–50 y": { female: 770 },
    },
    lactation: {
      "14–18 y": { female: 1200 },
      "19–30 y": { female: 1300 },
      "31–50 y": { female: 1300 },
    },
  },
  C: {
    years: {
      "1–3 y": { male: 15, female: 15 },
      "4–8 y": { male: 25, female: 25 },
      "9–13 y": { male: 45, female: 45 },
      "14–18 y": { male: 75, female: 65 },
      "19–30 y": { male: 90, female: 75 },
      "31–50 y": { male: 90, female: 75 },
      "51–70 y": { male: 90, female: 75 },
      "> 70 y": { male: 90, female: 75 },
    },
    months: {
      "0–6 mo": { male: 40, female: 40 },
      "6–12 mo": { male: 50, female: 50 },
    },
    pregnancy: {
      "14–18 y": { female: 80 },
      "19–30 y": { female: 85 },
      "31–50 y": { female: 85 },
    },
    lactation: {
      "14–18 y": { female: 115 },
      "19–30 y": { female: 120 },
      "31–50 y": { female: 120 },
    },
  },
  D: {
    years: {
      "1–3 y": { male: 15, female: 15 },
      "4–8 y": { male: 15, female: 15 },
      "9–13 y": { male: 15, female: 15 },
      "14–18 y": { male: 15, female: 15 },
      "19–30 y": { male: 15, female: 15 },
      "31–50 y": { male: 15, female: 15 },
      "51–70 y": { male: 15, female: 15 },
      "> 70 y": { male: 20, female: 20 },
    },
    months: {
      "0–6 mo": { male: 10, female: 10 },
      "6–12 mo": { male: 10, female: 10 },
    },
    pregnancy: {
      "14–18 y": { female: 15 },
      "19–30 y": { female: 15 },
      "31–50 y": { female: 15 },
    },
    lactation: {
      "14–18 y": { female: 15 },
      "19–30 y": { female: 15 },
      "31–50 y": { female: 15 },
    },
  },
  E: {
    years: {
      "1–3 y": { male: 6, female: 6 },
      "4–8 y": { male: 7, female: 7 },
      "9–13 y": { male: 11, female: 11 },
      "14–18 y": { male: 15, female: 15 },
      "19–30 y": { male: 15, female: 15 },
      "31–50 y": { male: 15, female: 15 },
      "51–70 y": { male: 15, female: 15 },
      "> 70 y": { male: 15, female: 15 },
    },
    months: {
      "0–6 mo": { male: 4, female: 4 },
      "6–12 mo": { male: 5, female: 5 },
    },
    pregnancy: {
      "14–18 y": { female: 15 },
      "19–30 y": { female: 15 },
      "31–50 y": { female: 15 },
    },
    lactation: {
      "14–18 y": { female: 19 },
      "19–30 y": { female: 19 },
      "31–50 y": { female: 19 },
    },
  },
  K: {
    years: {
      "1–3 y": { male: 30, female: 30 },
      "4–8 y": { male: 55, female: 55 },
      "9–13 y": { male: 60, female: 60 },
      "14–18 y": { male: 75, female: 75 },
      "19–30 y": { male: 120, female: 90 },
      "31–50 y": { male: 120, female: 90 },
      "51–70 y": { male: 120, female: 90 },
      "> 70 y": { male: 120, female: 90 },
    },
    months: {
      "0–6 mo": { male: 2.0, female: 2.0 },
      "6–12 mo": { male: 2.5, female: 2.5 },
    },
    pregnancy: {
      "14–18 y": { female: 75 },
      "19–30 y": { female: 90 },
      "31–50 y": { female: 90 },
    },
    lactation: {
      "14–18 y": { female: 75 },
      "19–30 y": { female: 90 },
      "31–50 y": { female: 90 },
    },
  },
  B1: {
    years: {
      "1–3 y": { male: 0.5, female: 0.5 },
      "4–8 y": { male: 0.6, female: 0.6 },
      "9–13 y": { male: 0.9, female: 0.9 },
      "14–18 y": { male: 1.2, female: 1.0 },
      "19–30 y": { male: 1.2, female: 1.1 },
      "31–50 y": { male: 1.2, female: 1.1 },
      "51–70 y": { male: 1.2, female: 1.1 },
      "> 70 y": { male: 1.2, female: 1.1 },
    },
    months: {
      "0–6 mo": { male: 0.2, female: 0.2 },
      "6–12 mo": { male: 0.3, female: 0.3 },
    },
    pregnancy: {
      "14–18 y": { female: 1.4 },
      "19–30 y": { female: 1.4 },
      "31–50 y": { female: 1.4 },
    },
    lactation: {
      "14–18 y": { female: 1.4 },
      "19–30 y": { female: 1.4 },
      "31–50 y": { female: 1.4 },
    },
  },
  B2: {
    years: {
      "1–3 y": { male: 0.5, female: 0.5 },
      "4–8 y": { male: 0.6, female: 0.6 },
      "9–13 y": { male: 0.9, female: 0.9 },
      "14–18 y": { male: 1.3, female: 1.0 },
      "19–30 y": { male: 1.3, female: 1.1 },
      "31–50 y": { male: 1.3, female: 1.1 },
      "51–70 y": { male: 1.3, female: 1.1 },
      "> 70 y": { male: 1.3, female: 1.1 },
    },
    months: {
      "0–6 mo": { male: 0.3, female: 0.3 },
      "6–12 mo": { male: 0.4, female: 0.4 },
    },
    pregnancy: {
      "14–18 y": { female: 1.4 },
      "19–30 y": { female: 1.4 },
      "31–50 y": { female: 1.4 },
    },
    lactation: {
      "14–18 y": { female: 1.6 },
      "19–30 y": { female: 1.6 },
      "31–50 y": { female: 1.6 },
    },
  },
  B3: {
    years: {
      "1–3 y": { male: 6, female: 6 },
      "4–8 y": { male: 8, female: 8 },
      "9–13 y": { male: 12, female: 12 },
      "14–18 y": { male: 16, female: 14 },
      "19–30 y": { male: 16, female: 14 },
      "31–50 y": { male: 16, female: 14 },
      "51–70 y": { male: 16, female: 14 },
      "> 70 y": { male: 16, female: 14 },
    },
    months: {
      "0–6 mo": { male: 2, female: 2 },
      "6–12 mo": { male: 4, female: 4 },
    },
    pregnancy: {
      "14–18 y": { female: 18 },
      "19–30 y": { female: 18 },
      "31–50 y": { female: 18 },
    },
    lactation: {
      "14–18 y": { female: 17 },
      "19–30 y": { female: 17 },
      "31–50 y": { female: 17 },
    },
  },
  B6: {
    years: {
      "1–3 y": { male: 0.5, female: 0.5 },
      "4–8 y": { male: 0.6, female: 0.6 },
      "9–13 y": { male: 1, female: 1 },
      "14–18 y": { male: 1.3, female: 1.2 },
      "19–30 y": { male: 1.3, female: 1.3 },
      "31–50 y": { male: 1.3, female: 1.3 },
      "51–70 y": { male: 1.7, female: 1.5 },
      "> 70 y": { male: 1.7, female: 1.5 },
    },
    months: {
      "0–6 mo": { male: 0.1, female: 0.1 },
      "6–12 mo": { male: 0.3, female: 0.3 },
    },
    pregnancy: {
      "14–18 y": { female: 1.9 },
      "19–30 y": { female: 1.9 },
      "31–50 y": { female: 1.9 },
    },
    lactation: {
      "14–18 y": { female: 2 },
      "19–30 y": { female: 2 },
      "31–50 y": { female: 2 },
    },
  },
  B9: {
    years: {
      "1–3 y": { male: 150, female: 150 },
      "4–8 y": { male: 200, female: 200 },
      "9–13 y": { male: 300, female: 300 },
      "14–18 y": { male: 400, female: 400 },
      "19–30 y": { male: 400, female: 400 },
      "31–50 y": { male: 400, female: 400 },
      "51–70 y": { male: 400, female: 400 },
      "> 70 y": { male: 400, female: 400 },
    },
    months: {
      "0–6 mo": { male: 65, female: 65 },
      "6–12 mo": { male: 80, female: 80 },
    },
    pregnancy: {
      "14–18 y": { female: 600 },
      "19–30 y": { female: 600 },
      "31–50 y": { female: 600 },
    },
    lactation: {
      "14–18 y": { female: 500 },
      "19–30 y": { female: 500 },
      "31–50 y": { female: 500 },
    },
  },
  B12: {
    years: {
      "1–3 y": { male: 0.9, female: 0.9 },
      "4–8 y": { male: 1.2, female: 1.2 },
      "9–13 y": { male: 1.8, female: 1.8 },
      "14–18 y": { male: 2.4, female: 2.4 },
      "19–30 y": { male: 2.4, female: 2.4 },
      "31–50 y": { male: 2.4, female: 2.4 },
      "51–70 y": { male: 2.4, female: 2.4 },
      "> 70 y": { male: 2.4, female: 2.4 },
    },
    months: {
      "0–6 mo": { male: 0.4, female: 0.4 },
      "6–12 mo": { male: 0.5, female: 0.5 },
    },
    pregnancy: {
      "14–18 y": { female: 2.6 },
      "19–30 y": { female: 2.6 },
      "31–50 y": { female: 2.6 },
    },
    lactation: {
      "14–18 y": { female: 2.8 },
      "19–30 y": { female: 2.8 },
      "31–50 y": { female: 2.8 },
    },
  },
  "Pantothenic Acid": {
    years: {
      "1–3 y": { male: 2, female: 2 },
      "4–8 y": { male: 3, female: 3 },
      "9–13 y": { male: 4, female: 4 },
      "14–18 y": { male: 5, female: 5 },
      "19–30 y": { male: 5, female: 5 },
      "31–50 y": { male: 5, female: 5 },
      "51–70 y": { male: 5, female: 5 },
      "> 70 y": { male: 5, female: 5 },
    },
    months: {
      "0–6 mo": { male: 1.7, female: 1.7 },
      "6–12 mo": { male: 1.8, female: 1.8 },
    },
    pregnancy: {
      "14–18 y": { female: 6 },
      "19–30 y": { female: 6 },
      "31–50 y": { female: 6 },
    },
    lactation: {
      "14–18 y": { female: 7 },
      "19–30 y": { female: 7 },
      "31–50 y": { female: 7 },
    },
  },
  Biotin: {
    years: {
      "1–3 y": { male: 8, female: 8 },
      "4–8 y": { male: 12, female: 12 },
      "9–13 y": { male: 20, female: 20 },
      "14–18 y": { male: 25, female: 25 },
      "19–30 y": { male: 30, female: 30 },
      "31–50 y": { male: 30, female: 30 },
      "51–70 y": { male: 30, female: 30 },
      "> 70 y": { male: 30, female: 30 },
    },
    months: {
      "0–6 mo": { male: 5, female: 5 },
      "6–12 mo": { male: 6, female: 6 },
    },
    pregnancy: {
      "14–18 y": { female: 30 },
      "19–30 y": { female: 30 },
      "31–50 y": { female: 30 },
    },
    lactation: {
      "14–18 y": { female: 35 },
      "19–30 y": { female: 35 },
      "31–50 y": { female: 35 },
    },
  },
  Choline: {
    years: {
      "1–3 y": { male: 200, female: 200 },
      "4–8 y": { male: 250, female: 250 },
      "9–13 y": { male: 375, female: 375 },
      "14–18 y": { male: 550, female: 400 }, // Note: Female recommendation changed for 14–18 y
      "19–30 y": { male: 550, female: 425 },
      "31–50 y": { male: 550, female: 425 },
      "51–70 y": { male: 550, female: 425 },
      "> 70 y": { male: 550, female: 425 },
    },
    months: {
      "0–6 mo": { male: 125, female: 125 },
      "6–12 mo": { male: 150, female: 150 },
    },
    pregnancy: {
      "14–18 y": { female: 450 },
      "19–30 y": { female: 450 },
      "31–50 y": { female: 450 },
    },
    lactation: {
      "14–18 y": { female: 550 },
      "19–30 y": { female: 550 },
      "31–50 y": { female: 550 },
    },
  },
};
export { vitaminGroups };
