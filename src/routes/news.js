const express = require('express')
const NewsRouter = express.Router()
const axios = require('axios')

NewsRouter.get('',async(req,res)=>{
    try {
        const newsApi = await axios.get('https://gnews.io/api/v4/search?q=india&token=1f97d54d51500852dada90d6b54c878e&max=80')
        const artic = newsApi.data
        res.render('news',{artic,message:'I AM Working'})
    } catch (error) {
        if(error.response){
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
            
        }else if(error.request){
            console.log(error.request)
        }else{
            console.log('Error',error.message)
        }
    }
})

module.exports = NewsRouter