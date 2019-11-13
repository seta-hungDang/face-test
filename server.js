const express = require('express');
const app = express();

app.use(express.static('.'))

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Listening at port ${port}...`)
})