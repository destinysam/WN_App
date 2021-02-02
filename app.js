const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/js',express.static(__dirname + 'public/js'))

app.set('views','./src/views')
app.set('view engine','ejs')


const World = require('./src/routes/world')
app.use('/',World)

const India = require('./src/routes/india')
app.use('/india',India)

const Technology = require('./src/routes/technology')
app.use('/technology',Technology)

const Health = require('./src/routes/health')
app.use('/health',Health)

const Sports = require('./src/routes/sports')
app.use('/sports',Sports)

app.listen(process.env.PORT || 5000)