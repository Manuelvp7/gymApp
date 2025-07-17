// Exercise State Management Module
const ExerciseManager = (function() {
  // Private variables (not accessible outside the module)
  let exerciseCategories = [];
  let exercises = [];

  /**
   * @returns {Promise<Object>} Exercise categories information
   */
  const fetchExerciseCategories = async () => {
    const res = await fetch("https://wger.de/api/v2/exercisecategory/");
    const data = await res.json();
    const {results} = data;
    return results;
  };

  const fetchExercises = async() => {
    const res = await fetch("https://wger.de/api/v2/exerciseinfo/?limit=900");
    const data = await res.json();
    const {results} = data;
    return results;
  }

  // Public API (what gets returned from the module)
  return {
    // Initialize the module
    async init() {
      try {
        exerciseCategories = await fetchExerciseCategories();
        exercises = await fetchExercises();
        console.log('Exercise data loaded:', exercises.length, 'exercises');
        return { categories: exerciseCategories, exercises: exercises };
      } catch (error) {
        console.error('Failed to load exercise data:', error);
        throw error;
      }
    },

    // Get all categories
    getCategories() {
      return [...exerciseCategories]; // Return a copy to prevent external modification
    },

    // Get all exercises
    getExercises() {
      return [...exercises]; // Return a copy to prevent external modification
    },

    // Filter exercises by category ID
    filterExercisesByCategory(categoryId) {
      return exercises.filter(exercise => exercise.category.id === categoryId);
    },

    // Get a specific category by ID
    getCategoryById(id) {
      return exerciseCategories.find(category => category.id === id);
    },

    // Get a specific exercise by ID
    getExerciseById(id) {
      return exercises.find(exercise => exercise.id === id);
    },

    // Check if data is loaded
    isLoaded() {
      return exerciseCategories.length > 0 && exercises.length > 0;
    }
  };
})();

// Initialize the module
const init = async () => {
  try {
    await ExerciseManager.init();
    
    // Now you can use the module's methods
    console.log('Categories:', ExerciseManager.getCategories());
    console.log('Exercises:', ExerciseManager.getExercises());
    console.log('Exercises for category 8:', ExerciseManager.filterExercisesByCategory(8));    
  } catch (error) {
    console.error('Initialization failed:', error);
  }
};

init();
