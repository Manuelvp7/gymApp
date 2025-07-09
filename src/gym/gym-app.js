/**
 * @returns {Promise<Object>} Excercise catedories information
 */
const fetchExcerciseCategories = async () => {
  const res = await fetch("https://wger.de/api/v2/exercisecategory/");
  const data = await res.json();
  console.log(data);
};

/**
 *
 * @param {HTMLDivElement} element
 */

export const GymApp = async (element) => {
  const categories = await fetchExcerciseCategories();
  console.log(categories);
};
