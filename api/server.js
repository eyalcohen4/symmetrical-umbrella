const fs = require('fs');
const path = require('path');
const os = require('os');
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
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
	console.log('Server listen at port 3000');
});

app.get('/getUser', (req, res) => {
	if (fs.existsSync(path.resolve(__dirname, './user.json'))) { 
		res.sendFile(path.resolve(__dirname, './user.json'));
	} else {
		res.sendStatus(404);
	}
});

app.post('/saveUser', (req, res) => {
	const form = new multiparty.Form();

	form.parse(req, (err, fields, files) => {
		const image  = fields['image'] && fields['image'][0];
		const imagePath = path.resolve(__dirname, './public/userImage.png');

		if (image && image.substring(0, 4) !== 'http') {
			const data   = image.replace(/^data:image\/\w+;base64,/, "");
			const buffer = new Buffer(data, 'base64');
			fs.writeFileSync(imagePath, buffer)
		}

		const userData = {
			firstName: fields['firstName'][0],
			image: `http://${req.headers.host}/static/userImage.png`,
			lastName: fields['lastName'][0],
			tel: fields['tel'][0],
			password: fields['password'][0],
		}

		fs.writeFileSync(path.resolve(__dirname, './user.json'), JSON.stringify(userData))
		res.sendStatus(200);
	})
});

