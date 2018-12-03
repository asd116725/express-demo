const express = require('express')
const app = express()
const fs = require('fs')
const router = require('./router').router
const bodyParser = require('body-parser')

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.use(router)

app.get('/test', (req, res)=>{
  //res.send('hello node')
  //约定在views为根目录下查找文件
  // res.render('SMKJprivacyText.html', {
  //   name: '吴继雄'
  // })
  res.render('test.html')
})

//app.use('/public/', express.static('./resource'))

app.listen(3000, ()=>{
  console.log('服务器已启动')
})
