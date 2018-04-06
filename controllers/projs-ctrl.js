const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /projects:
 *  get:
 *    description: Retrieve all projects
 *    tags:
 *       - projects
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: employerId
 *        in : query
 *        required: false
 *        type: string
 *        description: retrieve projects as employer
 *    responses:
 *      200:
 *        description: projects
 */
router.get('/', (req, res) => {
  res.send(req.body);
});


/**
 * @swagger
 * /projects/{projectId}:
 *  get:
 *    description: Retrieve Project Info
 *    tags:
 *       - projects
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: projectId
 *        description: project ID
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: a project
 */
router.get('/:projectId', function (req, res, next) {
  res.send(req.body);
});

/**
 * @swagger
 * /projects:
 *  post:
 *    description: Create a new project
 *    tags:
 *       - projects
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: title
 *        description: Title of the project
 *        in: formData
 *        required: true
 *        type: string
 *      - name: description
 *        description: Description of the project
 *        in: formData
 *        required: true
 *        type: string
 *      - name: employerId
 *        description: Employer's user ID
 *        in: formData
 *        required: true
 *        type: string
 *      - name: minBudget
 *        description: minimum budget of the project
 *        in: formData
 *        required: true
 *        type: number
 *      - name: maxBudget
 *        description: maximum budget of the project
 *        in: formData
 *        required: true
 *        type: number
 *      - name: startDate
 *        description: The start date of the project
 *        in: formData
 *        required: true
 *        type: string
 *    responses:
 *      201:
 *        description: project created
 */
router.post('/', (req, res) => {
  res.send(req.body);
});


/**
 * @swagger
 * /projects/{project_id}:
 *  put:
 *    description: update a project
 *    tags:
 *      - projects
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: project_id
 *        description: project ID
 *        in: path
 *        required: true
 *        type: number
 *      - name: title
 *        description: Title of the project
 *        in: formData
 *        required: false
 *        type: string
 *      - name: description
 *        description: Description of the project
 *        in: formData
 *        required: false
 *        type: string
 *      - name: min_budget
 *        description: minimum budget of the project
 *        in: formData
 *        required: false
 *        type: string
 *      - name: max_budget
 *        description: maximum budget of the project
 *        in: formData
 *        required: false
 *        type: string
 *      - name: start_date
 *        description: The start date of the project
 *        in: formData
 *        required: false
 *        type: string
 *    responses:
 *      200:
 *        description: project updated
 */

router.put('/:project_id', (req, res) => {
  res.send(req.body);
});

module.exports = router;