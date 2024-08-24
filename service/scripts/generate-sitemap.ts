import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const fs = require('fs');
const path = require('path');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://softeer.site' });
  const writeStream = createWriteStream(
    resolve(__dirname, '../public/sitemap.xml')
  );

  // 여기에서 사이트의 URL들을 추가합니다.
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({
    url: '/lottery-lounge',
    changefreq: 'daily',
    priority: 0.8,
  });
  sitemap.write({ url: '/quiz-lounge', changefreq: 'daily', priority: 0.7 });
  sitemap.write({
    url: '/comments-lounge',
    changefreq: 'daily',
    priority: 0.8,
  });
  sitemap.write({
    url: '/winning-result',
    changefreq: 'daily',
    priority: 0.7,
  });

  sitemap.end();

  streamToPromise(sitemap)
    .then((data) => writeStream.write(data.toString()))
    .catch((err) => console.error(err));
}

generateSitemap();
