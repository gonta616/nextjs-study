export default (req, res) => {
  setTimeout(() => {
    if (req.method === 'POST') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({msg: 'POST SUCCESS!!'}))
    } else {
      res.statusCode = 403
      res.setHeader('Content-Type', 'application/json')
      res.end('403 Forbidden')
    }
  }, 5000)
}
