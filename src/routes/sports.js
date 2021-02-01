const express = require('express')
const Sports = express.Router()
const axios = require('axios')



Sports.get('/',async(req,res)=>{
    try {
        const newsApi = await axios.get('http://newsapi.org/v2/everything?q=sports&from=2021-01-01&sortBy=publishedAt&language=en&apiKey=1c307ad0d0444e4fa8aeeba31d3d356e')
        const artic = newsApi.data
        res.render('pages/sports',{artic,title:'sports'})
    } catch (error) {
        if(error.response){
            res.render('pages/sports',{artic : null,title:'sports'})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if(error.request){
            res.render('pages/sports',{artic : null,title:'sports'})
            console.log(error.request)
        }else{
            res.render('pages/sports',{artic : null,title:'sports'})
            console.log('Error',error.message)
        }
    }
})

module.exports = Sports