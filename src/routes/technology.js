const express = require('express')
const Technology = express.Router()
const axios = require('axios')



Technology.get('/',async(req,res)=>{
    try {
        const newsApi = await axios.get('http://newsapi.org/v2/everything?q=technology&from=2021-02-01&sortBy=publishedAt&language=en&apiKey=aeed9c08c33048c9a13de10588075691')
        const artic = newsApi.data
        res.render('pages/technology',{artic,Title : 'technology'})
    } catch (error) {
        if(error.response){
            res.render('pages/technology',{artic : null,Title : 'technology'})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if(error.request){
            res.render('pages/technology',{artic : null,Title : 'technology'})
            console.log(error.request)
        }else{
            res.render('pages/technology',{artic : null,Title : 'technology'})
            console.log('Error',error.message)
        }
    }
})

module.exports = Technology