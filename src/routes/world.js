const express = require('express')
const World = express.Router()
const axios = require('axios')

World.get('',async(req,res)=>{
    try {
        const newsApi = await axios.get('http://newsapi.org/v2/everything?q=world&from=2021-01-01&sortBy=publishedAt&language=en&apiKey=1c307ad0d0444e4fa8aeeba31d3d356e')
        const artic = newsApi.data
        res.render('pages/world',{artic,title:'world'})
    } catch (error) {
        if(error.response){
            res.render('pages/world',{artic : null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if(error.request){
            res.render('pages/world',{artic : null})
            console.log(error.request)
        }else{
            res.render('pages/world',{artic : null})
            console.log('Error',error.message)
        }
    }
})
module.exports = World