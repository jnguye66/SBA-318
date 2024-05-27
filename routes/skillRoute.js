// Initialize Router
const express = require("express");
const router = express.Router();

//Importing the data from characters.js
const skills = require('../data/skills.js');

/**
 * Base Route - /api/skills
 */

// Creating a GET route for the entire posts database.
// This would be impractical in larger data sets.
router.get('/', (req, res) => {
    res.json(skills);
});

// Creating a simple GET route for individual posts,
// using a route parameter for the unique id.
router.get('/:id', (req, res, next) => {
    const skill = skills.find((p) => p.id == req.params.id);
    if (skill) {
        res.json(skill);
    } else {
        next();
    }
});

//Creating a Post (POST)
router.post('/', (req, res) => {
    // Within the POST request route, we create a new
    // user with the data given by the client.
    // We should also do some more robust validation here,
    // but this is just an example for now.
    if (req.body.userId && req.body.title && req.body.content) {
        const skill = {
            id: skills[skills.length - 1].id + 1,
            userId: req.body.userId,
            basic: req.body.basic,
            skill: req.body.skill,
            ultimate: req.body.ultimate,
            passive: req.body.passive
        };

        skills.push(skill);
        res.json(skills[skills.length - 1]);
    } else res.json({ error: 'Insufficient Data' });
});

router.patch('/:id', (req, res) => {
    // Within the PATCH request route, we allow the client
    // to make changes to an existing user in the database.
    const skill = skills.find((p, i) => {
        if (p.id == req.params.id) {
            // iterating through the user object and updating each property with the data that was sent by the client
            for (const key in req.body) {
                skills[i][key] = req.body[key];
            }
            return true;
        }
    });

    if (skill) res.json(skill);
    else next();
});

router.delete('/:id', (req, res) => {
    // The DELETE request route simply removes a resource.
    const skill = skills.find((p, i) => {
        if (p.id == req.params.id) {
            skills.splice(i, 1);
            return true;
        }
    });

    if (skill) res.json(skill);
    else next();
});

module.exports = router;