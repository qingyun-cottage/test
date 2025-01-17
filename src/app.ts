import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

// 解决跨域问题
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    )
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.listen(8290, () => {
    console.log('server is running at http://localhost:8980')
})
