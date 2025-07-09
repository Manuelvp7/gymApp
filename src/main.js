// import { GymApp } from "./gym/gym-app";

/**
 * @returns {Promise<Object>} Excercise catedories information
 */
const fetchExcerciseCategories = async () => {
  const res = await fetch("https://wger.de/api/v2/exercisecategory/");
  const data = await res.json();
  console.log(data);
};

fetchExcerciseCategories();

// const element = document.querySelector(".card");
// GymApp(element);
