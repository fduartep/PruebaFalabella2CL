const {Given, When, Then, And} = require('cucumber');
const Role = require('testcafe').Role;
const Selector = require('testcafe').Selector;
const Btn = Selector('.LC20lb').withText('Falabella.com - Mejor Compra Online');

Given('I am open Google\'s search page', async function() {
    await testController.navigateTo('https://google.com');
});

When('I am typing my search request {string} on Google', async function(text) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('I press the {string} key on Google', async function(text) {
    await testController.pressKey(text); 
});


Then('I click on the falabella url', async function (t) {
        await t.click(Selector('.LC20lb').withText('Falabella.com - Mejor Compra Online'));
    
    });

    