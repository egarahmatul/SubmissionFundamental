import '../component/flower-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const flowerListElement = document.querySelector('flower-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchFlower(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    flowerListElement.flowers = results;
  };

  const fallbackResult = message => {
    flowerListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
