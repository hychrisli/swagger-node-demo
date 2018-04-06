const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /images/{username}:
 *  post:
 *    description: upload image for user
 *    tags:
 *       - images
 *    produces:
 *      - multipart/form-data
 *    parameters:
 *      - name: username
 *        description: Username for profile image.
 *        in: path
 *        required: true
 *        type: string
 *      - in: formData
 *        name: file
 *        type: file
 *        description: upload image
 *    responses:
 *      200:
 *        description: upload success
 */
router.post('/:username', (req, res) => {
  res.send(req.body);
});

/**
 * @swagger
 * /images/{username}:
 *  get:
 *    description: download image for user
 *    tags:
 *      - images
 *    consumes:
 *      - image/png
 *    parameters:
 *      - name: username
 *        description: Username for profile image.
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: download success
 */
router.get('/:username', (req, res) => {
  res.send(req.body);
});

module.exports = router;