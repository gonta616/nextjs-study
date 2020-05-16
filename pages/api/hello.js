export default (req, res) => {
  const {
    query: { slug }
  } = req

  res.end('OK!')
}