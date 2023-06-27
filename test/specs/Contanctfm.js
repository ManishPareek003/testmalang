describe('Verify contact form', () => {

    it('Verify scroll', async () => {
        await browser.url('https://www.malangmusic.in/')
        var submit = await $('//*[@id="folk_form_event"]')
        await submit.scrollIntoView()
    })
    it('click on empty field',async ()=>{
        var submit = await $('//*[@id="folk_form_event"]')
        await submit.click()
        await browser.pause(9000)
    })
    it('Set value on name filed',async ()=>{
        var submit = await $('//*[@id="rajasthani_folk_form"]/div/div[1]/input')
        await submit.setValue("Manish Kumar")
        await browser.pause(9000)
    })
    it('Set value on email filed',async ()=>{
        var submit = await $('//*[@id="rajasthani_folk_form"]/div/div[2]/input')
        await submit.setValue("ManishKumar@gmail.com")
        await browser.pause(9000)
    })
    it('Set value on phone filed',async ()=>{
        var submit = await $('//*[@id="rajasthani_folk_form"]/div/div[3]/input')
        await submit.setValue("9079305541")
        await browser.pause(9000)
    })
    it('Set value on loction filed',async ()=>{
        var submit = await $('//*[@id="rajasthani_folk_form"]/div/div[4]/input')
        await submit.setValue("Jaipur")
        await browser.pause(9000)
    })
    it('Set value on date filed',async ()=>{
        var submit = await $('//*[@id="datepicker"]')
        await submit.setValue("01/05/2023")
        await browser.pause(9000)
    })
    it('Set value on message filed',async ()=>{
        var submit = await $('//*[@id="rajasthani_folk_form"]/div/div[6]/textarea')
        await submit.setValue("Malang automation script from submit")
        await browser.pause(9000)
    })
   /* it('click on empty field',async ()=>{
        var submit = await $('//*[@id="folk_form_event"]')
        await submit.click()
        await browser.pause(4000)
    })*/
})