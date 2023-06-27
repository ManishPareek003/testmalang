 describe('Verify header social media buttons', () => {

    it('Verify title', async () => {

        await browser.url('https://www.malangmusic.in/')

        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('Malang Music Group: Rajasthani Folk Music and Dance Group For Wedding Jaipur, Bangalore, Hyderabad & Mumbai')
    })

        it('click on sounscould ', async () => {
        let soundcould =  $('/html/body/div[1]/div/div/div[2]/ul/li[6]/a/i')
        await soundcould.click()
        await browser.pause(9000)
    })
    it('click on youtube ', async () => {
        let youtube =  $('/html/body/div[1]/div/div/div[2]/ul/li[5]/a/i')
        await youtube.click()
        await browser.pause(9000)
    })
    it('click on instagram  ', async () => {
        let instagram =  $('/html/body/div[1]/div/div/div[2]/ul/li[4]/a/i')
        await instagram.click()
        await browser.pause(9000)
    })
    it('click on twitter ', async () => {
        let twitter =  $('/html/body/div[1]/div/div/div[2]/ul/li[3]/a/i')
        await twitter.click()
        await browser.pause(9000)
    })
    it('click on facebook ', async () => {
        let facebook =  $('/html/body/div[1]/div/div/div[2]/ul/li[2]/a/i')
        await facebook.click()
        await browser.pause(9000)
    })
    it('click on email ', async () => {
        let email =  $('/html/body/div[1]/div/div/div[1]/ul/li[3]/a/i')
        await email.click()
        await browser.pause(9000)
    })
     it('clcik on call', async () => {
        let call =  $('/html/body/div[1]/div/div/div[1]/ul/li[1]/a/i')
        await call.click()
        await call.closeWindow()
        await browser.pause(9000)
    })
})


