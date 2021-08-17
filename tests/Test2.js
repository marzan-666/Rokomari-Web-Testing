module.exports = {
    "CSS and XPATH" : function(browser){
        browser.url("http://www.rokomari.com")
        browser.pause(3000)
        
        const cssSelector = "#js--search"
        const xpathSelector = '//*[@id="js--search"]'

        browser.useXpath()
        browser.setValue(xpathSelector,"This is Xpath")
        
        browser.pause(2000)
        browser.useCss()
        browser.clearValue(cssSelector)
        browser.setValue(cssSelector,"This is CSS")
        browser.pause(2000)
        
        


    }
}