const express = require('express')
const router = express.Router();
const fs = require('fs')

router.get('/', (req, res)=>{

  fs.readFile('./db.json', 'utf8', (err, data)=>{
    if( err ) {
      return res.status(500).send('服务文件失败')
    }
    res.render('index.html', {
      fruits: [
        '香蕉',
        '苹果',
        '栗子'
      ],
      students: JSON.parse(data.toString()).students
    })
  })

})

router.get('/students/new', (req, res)=>{
  res.render('news.html')
})

router.post('/students/new', (req, res)=>{
  console.log(req.body)
})

module.exports = {
  router
}
