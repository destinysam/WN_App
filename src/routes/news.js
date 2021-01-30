const express = require('express')
const NewsRouter = express.Router()
const axios = require('axios')

NewsRouter.get('',async(req,res)=>{
    try {
        const newsApi = await axios.get('https://gnews.io/api/v4/search?q=india&token=c9e7984b00f50c3f94eefd0e709173a5&max=80&lang=en')
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