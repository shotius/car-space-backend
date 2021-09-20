import { IUser } from 'types';
import User from '../models/user';
import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const getBooks = () => {
  const url = 'https://books.goalkicker.com/';
  let linkList: any = [];
  let dlinkList: any = [];

  const getWebsiteLinks = async (url: string) => {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      $('div.bookContainer').each(function (_i: any, elem: any) {
        let link = $(elem).find('a').attr('href');
        linkList.push(url + link);
      });
      // console.log('link list', linkList)
    } catch (error) {
      console.error(error);
    }
  };

  const downloadLinks = async (linkList: string[]) => {
    for (const link of linkList.slice(0, 2)) {
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
    // console.log('dling',  dlinkList)
  };

  const downloadFiles = async (
    dlinkList: { name: string; dlink: string }[]
  ) => {
    for (const link of dlinkList) {
      let name = link.name + '.pdf';
      let url = link.dlink;
      let file = fs.createWriteStream(name);
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
      });
      response.data.pipe(file);
    }
  };

  (async () => {
    await getWebsiteLinks(url);
    await downloadLinks(linkList);
    await downloadFiles(dlinkList);
  })();
};

const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};

export default {
  getUsers,
};
