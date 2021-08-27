import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/client/tictacjs.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    await driver.sleep(1000)

    
});

test('I can click a square', async () => {

    let square = await driver.findElement(By.id('cell-0'));
    await square.click();

    await driver.sleep(1000)
})

test('I can click a different square', async () => {

    let square = await driver.findElement(By.id('cell-8'));
    await square.click();

    await driver.sleep(1000)
})

test('I can check to see if the computer played the right amount of times', async () => {

    let squares = await driver.findElements(By.xpath('//td[contains(text(), "O")]'))
    if (squares.length != 2) {
        fail("Computer did not play the correct number of times")
    }
    
})