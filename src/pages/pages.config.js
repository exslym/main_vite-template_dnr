import { resolve } from 'path';

const pages = [
  { name: 'main', path: resolve(__dirname, '../index.html') },
  { name: 'page1', path: resolve(__dirname, './page1.html') },
  // { name: 'page2', path: resolve(__dirname, './page2.html') },
];

export default pages;
