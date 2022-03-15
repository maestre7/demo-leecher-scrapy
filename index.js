// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality.
// Any number of plugins can be added through `puppeteer.use()`
const puppeteer = require('puppeteer-extra')

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// For the creation of RFC4122 UUIDs
const { v4: uuidv4 } = require('uuid');

//Url
const pageUrl = 'https://lectortmo.com/library';

//XPath
const popUpXpath = '//button[text()="ACEPTO"]';
const nextXpath = '//ul[starts-with(@class,"pagination")]/li[2]/a';

//Sleep
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));