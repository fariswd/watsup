const puppeteer = require('puppeteer');
let {browser, page} = require('./browser');

const getQrModule = async pageArg => {
  try {
    if (!pageArg) {
      const _browser = await puppeteer.launch({
        slowMo: 50,
        headless: false,
      });

      const _page = await _browser.newPage();
      await _page.setViewport({width: 1080, height: 768});
      await _page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      );
      browser = _browser;
      page = _page;
      await _page.goto('https://web.whatsapp.com/');
      await _page.setDefaultTimeout(0);
      const qrCanvas = await _page.waitForSelector('canvas');
      await qrCanvas.screenshot({path: 'public/1.png'});
      return '/public/1.png';
    } else {
      // Navigate the page to a URL.
      await pageArg.goto('https://web.whatsapp.com/');
      await pageArg.setDefaultTimeout(0);
      const qrCanvas = await pageArg.waitForSelector('canvas');
      await qrCanvas.screenshot({path: 'public/1.png'});
      return '/public/1.png';
    }
  } catch (error) {
    console.log('ERR', error);
    return '';
  }
};

module.exports = getQrModule;
