module.exports = {
    "@tags" : ['login-test'],
    'Try login with valid credentials': function(browser){
        browser.url('http://www.rokomari.com')
        //.waitForElementVisible('body',3000)
        //.verify.title('Sign In')
        //.waitForElementVisible('#Input_Email',2000)
        //.clearValue('#Input_Email')
        //.setValue('#Input_Email', 'ems.user1@yopmail.com')
        //.setValue('#Input_Password','@Ems123')
        //.click('button[type=submit]')
        browser.pause(1000)
        //.assert.title('First')
        //.end()
        
        browser.click("#js--main-header > div > div > div.col-2 > div > a > img")
        browser.pause(3000)

        const Text = "#home-book-list-wrapper > section:nth-child(6) > div.row > div.col-8.d-flex.align-items-center > h1"
        browser.assert.containsText(Text,"বঙ্গবন্ধু, বাংলাদেশ ও মুক্তিযুদ্ধ বিষয়ক বই")
        browser.pause(2000)


    }
};