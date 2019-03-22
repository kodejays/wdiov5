
describe('test',() => {
    it('test01',() => {
        browser.url('https://www.google.com');
        console.log('the title:',browser.getTitle())
    })
})