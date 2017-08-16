const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multiparty = require('multiparty');
const app = express();

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');

    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.listen(3000, () => {
	console.log('Server listen at port 3000');
});

app.get('/getUser', (req, res) => {
	res.sendFile(path.resolve(__dirname, './user.json'));
});

app.post('/saveUser', (req, res) => {
	const form = new multiparty.Form();

	form.parse(req, (err, fields, files) => {
		const image  = fields['image'][0];
		const data   = image.replace(/^data:image\/\w+;base64,/, "");
		const buffer = new Buffer(data, 'base64');
		const imagePath = path.resolve(__dirname, './userImage.png');

		const userData = {
			image: imagePath,
			firstName: fields['firstName'][0],
			lastName: fields['lastName'][0],
			tel: fields['tel'][0],
			password: fields['password'][0],
		}

		fs.writeFileSync(imagePath, buffer)
		fs.writeFileSync(path.resolve(__dirname, './user.json'), JSON.stringify(userData))
	})
});

