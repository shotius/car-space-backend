const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { PATH_TO_CAR_DATA } = require('../utils/constants');

export const getBooks = async () => {
  const url = 'https://books.goalkicker.com/';
  let linkList = [];
  let dlinkList = [];

  const getWebsiteLinks = async (url) => {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      $('div.bookContainer').each(function (i, elem) {
        let link = $(elem).find('a').attr('href');
        linkList.push(url + link);
      });
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const downloadLinks = async (linkList) => {
    for (const link of linkList.slice(0, 1)) {
      const response = await axios.get(link);
      const $ = cheerio.load(response.data);
      let name = $('.download').attr('onclick');
      // console.log('before - ', name);
      name = name.match(/location\.href\s*=\s*['"]([^'"]*)['"]/);
      // console.log('after - ', name);
      let dlink = link + name[1];
      dlinkList.push({
        name: name[1],
        dlink: dlink,
      });
    }
  };

  const downloadFiles = async (dlinkList) => {
    for (const link of dlinkList) {
      let name = link.name + '.pdf';
      let url = link.dlink;
      let file = fs.createWriteStream(`${PATH_TO_CAR_DATA}/${name}`);
      try {
        const response = await axios({
          url,
          method: 'GET',
          responseType: 'stream',
        });
        response.data.pipe(file);
      } catch (error) {
        return false;
      }
    }
  };

    console.log('scraping books...');
    await getWebsiteLinks(url);
    await downloadLinks(linkList);
    await downloadFiles(dlinkList);
    return true;
};
