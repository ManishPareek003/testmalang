describe('Verify header content', () => {

    it('Verify title h1', async () => {
        await browser.url('https://www.malangmusic.in/')
        await expect($("h1")).toHaveTextContaining("Rajasthani folk")
        await browser.pause(9000)
    })
    it('Verify title h1', async () => {
        await expect($("h1")).toHaveTextContaining("Music Group")
        await browser.pause(9000)
    })
    it('Verify title h2', async () => {
       
        await expect($("h2")).toHaveTextContaining("Best Folk Music and Dance Group.")
        await browser.pause(9000)
    })
    it('Verify title h3', async () => {
         
        await expect($('/html/body/div[6]/div/div/div[1]')).toHaveTextContaining("OUR SOULFUL PERFORMANCES")
        await browser.pause(9000)
    })
    it('Verify title middle', async () => {
         
        await expect($('/html/body/div[6]/div/div/div[1]/p')).toHaveTextContaining("People have their own reasons to love folk music. Folk music is entwined in the hearts of the people.")
        await browser.pause(9000)
    })
    it('Verify title middle', async () => {
         
        await expect($('/html/body/div[6]/div/div/div[1]/p')).toHaveTextContaining("Folk music connects the hearts to the nativity no matter how far the person is from native place.")
    })
    it('Verify title middle', async () => {
         
        await expect($('/html/body/div[7]/div/div/h3')).toHaveTextContaining("Need A Customized Rajasthani Folk Music Group For Your Event ?")
    })
    it('Verify title middle', async () => {
         
        await expect($('/html/body/div[7]/div/div/h3')).toHaveTextContaining("Fill Below Form And Click On Submit.")
    })
    it('Verify title middle', async () => {
         
        await expect($('/html/body/div[9]/div/div/div/div[1]/p')).toHaveTextContaining("Malang Music Group")
    })
    it('Verify title middle', async () => {
         
        await expect($('/html/body/div[9]/div/div/div/div[1]/p')).toHaveTextContaining("have performed vibrantly in Jaipur, Jodhpur, Udaipur, Bikaner, New Delhi, Gurgaon, Chandigarh, Indore, Bhopal, Ahmedabad, Chennai, Bangalore, Hyderabad, Kolkata, Siliguri, Guwahati, and Rural Cities of India and in Abroad Cities Dubai, Qatar, Riyadh, UAE, Oman, South Africa, London, Sydney (Australia), Newyork, Washington,Germany Etc. Especially our Rajasthani Folk Dance Troupe & Langa Manganiyar Singers Group have given Many successful shows in many Corporate – Private – Wedding Events.")
    })
    it('Verify title middle', async () => {
         
        await expect($('/html/body/div[9]/div/div/div/div[2]/div[1]/p')).toHaveTextContaining("Exploring Folk Group and Dance in Jaipur, Delhi NCR, Dubai, UAE, Germany, Anywhere Globally.")
    })
})
