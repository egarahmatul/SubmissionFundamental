import _flowers from './flower.js';

class DataSource {
  static searchFlower(keyword) {
    return fetch(`https://perenual.com/api/species-list?page=1&key=sk-gKc0642e803548c14436&q=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson)
          if (responseJson.data) {
            return Promise.resolve(responseJson.data);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
