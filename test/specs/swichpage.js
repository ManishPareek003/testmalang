describe('switch all pages and sub pages',()=>{
    it('click on about us', async ()=>{
        await browser.url('https://www.malangmusic.in/')
        let aboutus = await $('//*[@id="navbarTogglerDemo01"]/ul/li[2]/a')
        await aboutus.click()
        await aboutus.waitForDisplayed()
    }) 
   it('click on CONTACT us', async ()=>{ 
         let CONTACT = await $('//*[@id="navbarTogglerDemo01"]/ul/li[3]/a')
         await CONTACT.click()
         await CONTACT.waitForDisplayed()  
    })
    it('click on ARTISTS', async ()=>{ 
        let ARTISTS = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[4]')
        await ARTISTS.click()
        await ARTISTS.waitForDisplayed() 
    })
    it('click on Performances', async ()=>{ 
        var Performances = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]')
        await Performances.click()
        await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[1]/a').waitForDisplayed()
   })

   it('click on Rajasthani FOLK DANCE', async ()=>{
    var Performances = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]')
    await Performances.click()
    await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[1]/a').waitForDisplayed()
    let RFD = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[1]/a')
    await RFD.click()
})

it('click on MUSICAL PHERE', async ()=>{
    var Performances = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]')
    await Performances.click()
    let mp = await browser.$('/html/body/header/div[2]/nav/div/div/div[2]/div/ul/li[5]/ul/li[2]/a')
    await mp.waitForEnabled()
    await mp.click()
    await browser.$('/html/body/div[2]/div/div/div/h1').waitForDisplayed()
})

it('click on wedding musical group', async ()=>{
    var Performances = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]')
    await Performances.click()
    let wdm = await $('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[3]/a')
    await wdm.click()
    await browser.$('/html/body/div[2]/div/div/div/h1').waitForDisplayed()
})

it('click on Gypsies of Rajasthan', async ()=>{ 
    var Performances = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]')
    await Performances.click()
    await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[1]/a').waitForDisplayed()
    let gr = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[4]/a')
    await gr.click()
})

it('click on Music Group for Mayra', async ()=>{ 
    var Performances = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]')
    await Performances.click()
    await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[1]/a').waitForDisplayed()
    let mgm = await $('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[5]/a')
    await mgm.click()
})

it('click on Rajasthani Folk Fusion Band', async ()=>{
    var Performances = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]')
    await Performances.click()
    await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[1]/a').waitForDisplayed()
    let rjb = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[6]/a')
    await rjb.click()
})

it('click on Sufi Fusion Band', async ()=>{ 
    var Performances = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]')
    await Performances.click()
    await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[1]/a').waitForDisplayed()
    let sf = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[5]/ul/li[7]/a')
    await sf.click()
})

it('click on Gallery', async ()=>{ 
    await browser.$('/html/body/header/div[2]/nav/div/div/div[2]/div/ul/li[6]').waitForDisplayed()
    let Gallery = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[6]/a')
    await Gallery.click()
})

it('click on EVENTS', async ()=>{ 
    let EVENTS = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[7]/a')
    await EVENTS.click()
})

it('click on VIDEOS', async ()=>{ 
   let VIDEOS = await browser.$('//*[@id="navbarTogglerDemo01"]/ul/li[8]/a')
   await VIDEOS.click()
   //var cc = await $('/html/body/footer/div/div/div/div/div/p[2]')
   //await cc.scrollIntoView()
       })

})