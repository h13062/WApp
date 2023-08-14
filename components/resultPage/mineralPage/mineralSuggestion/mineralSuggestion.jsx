import { mineralGroups } from "./mineralList";
const getMineralSuggestion = (
  mineral,
  age,
  ageOption,
  gender,
  selectedOption
) => {
  const selectedAgeRange =
    ageOption === "years"
      ? age >= 1 && age <= 3
        ? "1–3 y"
        : age >= 4 && age <= 8
        ? "4–8 y"
        : age >= 9 && age <= 13
        ? "9–13 y"
        : age >= 14 && age <= 18
        ? "14–18 y"
        : age >= 19 && age <= 30
        ? "19–30 y"
        : age >= 31 && age <= 50
        ? "31–50 y"
        : age >= 51 && age <= 70
        ? "51–70 y"
        : "> 70 y"
      : age >= 0 && age < 6
      ? "0–6 mo"
      : "6–12 mo";

  const recommendationGroup =
    selectedAgeRange === "0–6 mo" || selectedAgeRange === "6–12 mo"
      ? "months"
      : selectedAgeRange === "1–3 y" || selectedAgeRange === "4–8 y"
      ? "years"
      : selectedOption === "Pregnant - 1st Trimester" ||
        selectedOption === "Pregnant - 2nd Trimester" ||
        selectedOption === "Pregnant - 3rd Trimester"
      ? "pregnancy"
      : selectedOption === "Lactating - 0-6 months" ||
        selectedOption === "Lactating - over 7 months"
      ? "lactation"
      : gender === "male"
      ? "years" // Assuming male values are used for years range
      : "years"; // Assuming female values are used for years range

  const recommendation =
    mineralGroups[mineral][recommendationGroup][selectedAgeRange]?.[
      gender.toLowerCase()
    ];

  return recommendation ? recommendation.toFixed(1) : "N/A";
};

export { getMineralSuggestion };
