import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const categories = [
  {
    id: 'novels',
    description: 'Novels'
  },
  {
    id: 'short stories',
    description: 'Short Stories'
  },
  {
    id: 'biographies',
    description: 'Biographies'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (category) => {
  return category.description.toLowerCase();
};

class CategoryApi {
  static getAllCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], categories));
      }, delay);
    });
  }

  static saveCategory(category) {
    category = Object.assign({}, category); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minDescripLength = 3;
        if (category.description.length < minDescripLength) {
          reject(`Description must be at least ${minDescripLength} characters.`);
        }
        if (category.id) {
          const existingAuthorIndex = category.findIndex(a => a.id == category.id);
          category.splice(existingAuthorIndex, 1, category);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          category.id = generateId(category);
          categories.push(category);
        }

        resolve(category);
      }, delay);
    });
  }

  static deleteCategory(categoryId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = categories.findIndex(category => {
          return category.authorId == categoryId;
        });
        categories.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CategoryApi;
