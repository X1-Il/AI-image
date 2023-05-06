/**
 * This file contains all the utility functions used in the server.
 * @module utils
 */
/*******************************************************************/

/**
 * FILES FILTER
 * * Filter files by type.
 * @param {*} req 
 * @param {*} file 
 * @param {*} cb 
 */
const fileFilter = (req, file, cb) => {

	const allowedFiles = [
		'image/jpeg', 
		'image/png'
		// ... other allowed files
	];

	if(allowedFiles.includes(file.mimetype)) {
		// Allow storage of file
		cb(null, true);
	} else {
		// Reject file and create error.
		const error = new Error('Invalid file type');
		error.code = 'LIMIT_FILE_TYPES';
		return cb(null, false);
	}
}

export default {
    fileFilter,
};
