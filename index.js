const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json({
  type: "application/csp-report",
}))

app.post('/', (req, res) => {
  const {body: {'csp-report': report}} = req
  console.log(report)
  res.send();
})

app.listen(port, () => {
  console.log(`csp-server listening at port ${port}`)
})
