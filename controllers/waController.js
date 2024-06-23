const puppeteer = require('puppeteer');
const getQrModule = require('../module/getQR');
let {browser, page} = require('../module/browser');

const startBrowser = async (req, res) => {
  try {
    const _browser = await puppeteer.launch({slowMo: 50, headless: false});
    const _page = await _browser.newPage();
    await _page.setViewport({width: 1366, height: 768});
    await _page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    );
    browser = _browser;
    page = _page;
    res.json({
      status: 200,
      message: 'OK',
      result: {
        command: 'start-browser',
      },
    });
  } catch (error) {}
};

const getQr = async (req, res) => {
  try {
    const urlQr = await getQrModule(page);
    res.json({
      status: 200,
      message: 'OK',
      result: {
        data: {
          url: urlQr,
          expire: '15s',
        },
        command: 'get-qr',
      },
    });
  } catch (error) {}
};

const stopBrowser = async (req, res) => {
  browser.close();
  res.json({
    status: 200,
    message: 'OK',
    result: {
      command: 'stop-browser',
    },
  });
};

module.exports = {
  startBrowser,
  getQr,
  stopBrowser,
};
