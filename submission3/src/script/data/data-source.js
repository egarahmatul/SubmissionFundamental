import _flowers from './flower.js';

class DataSource {
  static searchFlower(keyword) {
    return fetch(`https://perenual.com/api/species-list?page=1&key=sk-gKc0642e803548c14436${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.flowers) {
            return Promise.resolve(responseJson.flowers);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
