const express = require('express')
const World = express.Router()
const axios = require('axios')

World.get('',async(req,res)=>{
    try {
        const newsApi = await axios.get('http://newsapi.org/v2/everything?q=world&from=2021-02-01&sortBy=publishedAt&language=en&apiKey=aeed9c08c33048c9a13de10588075691')
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