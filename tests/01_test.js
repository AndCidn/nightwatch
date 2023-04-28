module.exports = {
    'Test Google Search': function(browser) {
      browser
        .url('https://portal.in1cc.com/index.php/site/login')
        .waitForElementVisible('body')
        .execute(function() {
            navigator.mediaDevices.getUserMedia({audio:true});
          })
        .pause(10000)
        
        .acceptAlert()
        .acceptAlert()
        .acceptAlert()
        .acceptAlert()
        .acceptAlert()
        .setValue('input[id="LoginForm_username"]', 'agente1')
        .setValue('input[id="LoginForm_password"]', 'Reforma2024')
        .setValue('input[id="LoginForm_tenant_id"]', '1002')
        .waitForElementVisible('button[id="btnLogin"]')
        .click('button[id="btnLogin"]')
   
        .click('button[type="submit"]')
        .waitForElementVisible('a[id="dial_manual_call"]')
        .click('a[id="dial_manual_call"]')
        .waitForElementVisible('input[id="call_number"]')
        .setValue('input[id="call_number"]', '525532778745')
        .waitForElementVisible('button[id="dial_call"]')
        .click('button[id="dial_call"]')
        //.waitForElementVisible('body')
        .pause(10000)
        //.assert.containsText()('#search', 'nightwatch')
        .end();
    }
  };
  