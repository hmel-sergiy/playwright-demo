// const {webkit, chromium, firefox} = require('playwright')

// (async  () => {
//     for (const browserType of  [webkit, firefox, chromium]) {
//         const browser = await browserType.launch({
//             headless: false,
//         });
//     }
//     const page = await browser.newPage();
//     await page.goto('https://github.com/microsoft/playwright');
//     await page.screenshot({
//         paht: `screenshot-${browserType.name()}.png`,
//     });
//     await browser.close();

// })();

const {webkit, chromium, firefox, devices} = require('playwright')
const iphone11Pro = devices['iPhone 11 Pro'];

(async  () => {
    //запускаю браузер 
    const browser = await webkit.launch({
        //без хендлес режима
        headless: false,
    });
    //створюю браузерний контекст
    const context = await browser.newContext({
        ...iphone11Pro,
    })
    
    const page = await context.newPage();
    await page.goto('https://github.com/microsoft/playwright');
    
})();