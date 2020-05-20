const parseCookies = (req) => {
  const list = {}
  const rc = req.headers.cookie

  rc && rc.split(';').forEach(cookie => {
    const parts = cookie.split('=')
    list[parts.shift().trim()] = decodeURI(parts.join('='))
  })

  return list
}
export default (req, res) => {
  const cookies = parseCookies(req)
  console.log(cookies)
  res.end(JSON.stringify({ msg: 'SUCCESS!!' }))
}
