const express = require('express')
const World = express.Router()
const axios = require('axios')
World.get('',async(req,res)=>{
    let date = new Date()
    let month = date.getMonth() //starts from 0
    let acutalmonth = month + 1
    let newmonth = `2021-${acutalmonth}-01`
    try {
        const newsApi = await axios.get("http://newsapi.org/v2/everything?q=world&from="+newmonth+"&sortBy=publishedAt&language=en&apiKey="+API_KEY+"")
        const artic = newsApi.data
        res.render('pages/world',{artic,Title:'world'})
    } catch (error) {
        if(error.response){
            res.render('pages/world',{artic : null,Title:'world'})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if(error.request){
            res.render('pages/world',{artic : null,Title:'world'})
            console.log(error.request)
        }else{
            res.render('pages/world',{artic : null,Title:'world'})
            console.log('Error',error.message)
        }
    }
})
module.exports = World