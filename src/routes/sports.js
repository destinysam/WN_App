const express = require('express')
const Sports = express.Router()
const axios = require('axios')



Sports.get('/',async(req,res)=>{
    let date = new Date()
    let month = date.getMonth() //starts from 0
    let acutalmonth = month + 1
    let newmonth = `2021-${acutalmonth}-01`
    try {
        const newsApi = await axios.get('http://newsapi.org/v2/everything?q=sports&from="+newmonth+"&sortBy=publishedAt&language=en&apiKey=aeed9c08c33048c9a13de10588075691')
        const artic = newsApi.data
        res.render('pages/sports',{artic,Title:'sports'})
    } catch (error) {
        if(error.response){
            res.render('pages/sports',{artic : null,Title:'sports'})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if(error.request){
            res.render('pages/sports',{artic : null,Title:'sports'})
            console.log(error.request)
        }else{
            res.render('pages/sports',{artic : null,Title:'sports'})
            console.log('Error',error.message)
        }
    }
})

module.exports = Sports