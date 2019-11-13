const express = require('express');
const app = express();

app.use(express.static('.'))

app.listen(process.env.port || 9000, () => {
    console.log('Listening at port 9000...')
})