const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

app.get('/send', async (req, res) => {
  //opens the browser
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  //loads the url
  await page.goto('https://auth.revvsales.com/signin');

  //authentication
  await page.type('#signin-email-field', 'hyderahsan625@yahoo.com');
  await page.click('#signin-email-continue-btn');
  await page.waitForTimeout(2000)
  await page.type('#signin-password-field', 'Ahsan@12345');

  //navigating to landing page
  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click('#signin-button-field'), // Clicking the link will indirectly cause a navigation
  ]);

  //navigating to the document editing page
  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.goto('https://ftgm1g61.revvsales.com/documents/DOC-000045'), // Clicking the link will indirectly cause a navigation
  ]);
  await page.waitForTimeout(2000);   
  console.log(req.query.subject1)
  //entering values in the form fields 
  await page.focus('.revv-inp')
  await page.keyboard.type(req.query.subject1,{delay:100})
  await page.keyboard.press('Tab')
  await page.keyboard.type(req.query.classwork1,{delay:100})
  await page.keyboard.press('Tab')
  await page.keyboard.type(req.query.homework1,{delay:100})
  await page.keyboard.press('Tab')
  await page.keyboard.type(req.query.subject2,{delay:100})
  await page.keyboard.press('Tab')
  await page.keyboard.type(req.query.classwork2,{delay:100})
  await page.keyboard.press('Tab')
  await page.keyboard.type(req.query.homework2,{delay:100})
  await page.keyboard.press('Tab')
  await page.keyboard.type(req.query.subject3,{delay:100})
  await page.keyboard.press('Tab')
  await page.keyboard.type(req.query.classwork3,{delay:100})
  await page.keyboard.press('Tab')
  await page.keyboard.type(req.query.homework3,{delay:100})
  await page.keyboard.press('Tab')


  const [button]=await page.$x("//button[contains(.,'Send')]")
  await button.click()
  const [send_email]=await page.$$('.btn-send-heading')
  await send_email.click()
  await page.waitForTimeout(2000)

//   await page.keyboard.type('masai', {delay: 100})
//   await page.keyboard.press('Tab')

//   await page.keyboard.type('school', {delay: 100})
//   await page.keyboard.press('Tab')

//   await page.keyboard.type('2500', {delay: 100})

//   await page.waitForTimeout(2000); 

//   //taking screenshot of the page
//   await page.screenshot({path: 'login.png'});

//   //close the browser. now with the help of doc_no, doc_id and object_id, you can create a magic link of the document using revvsales api's
//   await browser.close();
//   res.json({"name":"babu"})
})
var port=5000||process.env.PORT
app.listen(port)
console.log(port)