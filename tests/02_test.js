module.exports = {
    'Test Google Search': function(browser) {
      browser
        .url('https://portal.in1cc.com/index.php/site/login')
        .waitForElementVisible('body')
        .waitForElementVisible('li[data-type="tenant_login"]')
        .click('li[data-type="tenant_login"]')
        .setValue('input[id="LoginForm_username"]', 'adolfo9torres')
        .setValue('input[id="LoginForm_password"]', 'Reforma20200')
        .waitForElementVisible('button[id="btnLogin"]')
        .click('button[id="btnLogin"]')
        .waitForElementVisible('body').useXpath()
        //.execute("scroll(0, 600)")
        .execute('scrollTo(0, document.evaluate(/html/body/div[2]/nav/div/div/div[3]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.scrollTop + 500)')
//
        .execute('scrollTo(0, document.querySelector("/html/body/div[2]/nav/div/div/div[3]/div").scrollTop - 500)')
        .waitForElementVisible('/html/body/div[2]/nav/div/div/ul/li[16]/a')
        .click('/html/body/div[2]/nav/div/div/ul/li[16]/a')
        .waitForElementVisible('/html/body/div[2]/nav/div/div/ul/li[16]/ul/li[1]/a')
        .click('/html/body/div[2]/nav/div/div/ul/li[16]/ul/li[1]/a')
        .waitForElementVisible('/html/body/div[2]/nav/div/div/ul/li[16]/ul/li[1]/ul/li[16]/a/span')
        .click('/html/body/div[2]/nav/div/div/ul/li[16]/ul/li[1]/ul/li[16]/a/span')
        
        .pause(20000)
        
        //.assert.containsText()('#search', 'nightwatch')
        .end();
    }
  };
  