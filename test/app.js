
describe('test', () => {
    it('test01', () => {
        browser.url('https://www.nbcnews.com/politics/justice-department/mueller-sends-report-trump-investigation-ag-barr-n974006');
        console.log('the title:',browser.getTitle());
        var elems = $$("h1");
        console.log('count:', elems.length);
    });

    it('test02', () => {

        try{
            //replace the current chromedriver(2.43.x) to latest at least to 2.44 for below maximize window to work
            //browser.maximizeWindow();
            //browser.url('https://www.nbcnews.com/politics/justice-department/mueller-sends-report-trump-investigation-ag-barr-n974006');
            
            for(var i = 0; i <= 500; i++){
                browser.execute("window.scrollBy(0,10);");
                //browser.pause(50);
            }
            
            browser.pause(3000);
            
        }
        catch(error)
        {
            console.log('e', error)
        }
    });
})