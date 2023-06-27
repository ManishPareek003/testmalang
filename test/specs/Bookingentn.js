describe('Booking enquiry button',()=>{

    it('Open popup header',async ()=>{
      await browser.url("https://www.malangmusic.in/")
       
      let bk = $$('.discounts')
      var inb = bk[0]
      await inb.isClickable()
      console.log('if clicke able  :',inb)
      await inb.click()
      await browser.pause(5000)
    }) 
      it('click on submit buton',async ()=>{

        let sbt = $$('#booking_event_mymodal')
        let sbtn = sbt[0]//vinanev343@onlcool.com
        await sbtn.click()

      })
    it('verify error name',async ()=>{
        
       let nerror = $('#discount_event_name-error')
       let error =  nerror.getText()
       await expect(error.toHaveTextContaining('Please enter Event Name'))

    })

  })