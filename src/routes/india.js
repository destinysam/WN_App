const express = require('express')
const India = express.Router()
const axios = require('axios')
const apkey = process.env.API_KEY


India.get('/',async(req,res)=>{
    let date = new Date()
    let month = date.getMonth() //starts from 0
    let acutalmonth = month + 1
    let newmonth = `2021-${acutalmonth}-01`
    try {
        const newsApi = await axios.get("http://newsapi.org/v2/everything?q=india&from="+newmonth+"&sortBy=publishedAt&language=en&apiKey="+apkey+"")
        const artic = newsApi.data
        res.render('pages/india',{artic,Title:'india'})
    } catch (error) {
        if(error.response){
            res.render('pages/india',{artic : null,Title:'india'})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if(error.request){
            res.render('pages/india',{artic : null,Title:'india'})
            console.log(error.request)
        }else{
            res.render('pages/india',{artic : null,Title:'india'})
            console.log('Error',error.message)
        }
    }
})

module.exports = India