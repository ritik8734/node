const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public') // Corrected variable name
//app.use(express.static(publicPath));
app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/abo.html`);
});
app.listen(3901);
