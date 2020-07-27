const http = require('http')
const url = require('url')
const qs = require('querystring')

const genResponse = userId => ({
  success: true,
  data:{
    userId,
    name:['nodejs','test'],
    description:'this is content',
    date:new Date()
  }
})

http.createServer((req,res) => {
  res.setHeader('Content-Type','application/json;charset=utf-8')
  const reqUrl = url.parse(req.url)
  if(reqUrl.pathname === '/api/search/data'){
    const uid = qs.parse(reqUrl.query).userId
    const result = JSON.stringify(genResponse(uid))
    res.end(result)
  }else{
    res.writeHead(404)
    res.end('NotFund')
  }
}).listen(8000,() => {
  console.log('listen on 8000!')
})

