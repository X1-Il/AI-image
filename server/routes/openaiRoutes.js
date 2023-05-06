const express = require('express');
const { generateImage, editImage } = require('../controllers/openaiController');
const router = express.Router();
const multer = require('multer');


/**
 * Multer storage configuration.
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      	cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      	cb(null, file.originalname);
    }
});

/* const upload = multer({storage, fileFilter}); */

const files = []

/* router.post('/editimage', upload.single('image'), (req, res) => {
	files.push(req.file)
	res.json({file: req.file})
}); */

router.get('/upload', (req, res) => {
	res.send(`
		<form action="/api/openai/upload" method="post" enctype="multipart/form-data">
			<input type="file" name="image" />
			<input type="submit" value="Upload" />
		</form>
	`)
})

router.post('/upload', (req, res) => {
	
	console.log(req.headers['content-type'])

	const boundary = req.headers['content-type'].split('boundary=')[1];

	let body = '';
	
	// Event data is sent in chunks.
	// Add each chunk to the body.
	req.on('data', (chunk) => (body += chunk));

	req.on('end', () => {
		// Split the body into an array of chunks.
		body.split(boundary).map((data, index) => console.log(index, data))

		res.sendStatus(200);
	})
})

router.post('/generateimage', generateImage);

module.exports = router;