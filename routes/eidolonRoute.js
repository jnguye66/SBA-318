// Initialize Router
const express = require("express");
const router = express.Router();

//Importing the data from characters.js
const eids = require('../data/eidolons.js');

/**
 * Base Route - /api/eids
 */

// Creating a GET route for the entire users database.
// This would be impractical in larger data sets.
router.get('/', (req, res) => {
    res.json(eids);
});

// Creating a simple GET route for individual eids,
// using a route parameter for the unique id.
router.get('/:id', (req, res, next) => {
    const eid = eids.find((e) => e.id == req.params.id);
    if (eid) {
        res.json(eid);
    } else {
        // Sends the request to the error handling middlware
        next();
    }
});

//Creating a User (POST)
router.post('/', (req, res) => {
    // Within the POST request route, we create a new
    // user with the data given by the client.
    // We should also do some more robust validation here,
    // but this is just an example for now.
    if (req.body.userId && req.body.E1 && req.body.E2 && req.body.E3 && req.body.E4 && req.body.E5 && req.body.E6) {
        const eid = {
            id: eids[eids.length - 1].id + 1,
            userId: req.body.userId,
            E1: req.body.E1,
            E2: req.body.E2,
            E3: req.body.E3,
            E4: req.body.E4,
            E5: req.body.E5,
            E6: req.body.E6
        };

        eids.push(eid);
        res.json(eids[eids.length - 1]);
    } else res.json({ error: 'Insufficient Data' });
});

router.patch('/:id', (req, res) => {
    // Within the PATCH request route, we allow the client
    // to make changes to an existing user in the database.
    const eid = eids.find((e, i) => {
        if (e.id == req.params.id) {
            // iterating through the user object and updating each property with the data that was sent by the client
            for (const key in req.body) {
                eids[i][key] = req.body[key];
            }
            return true;
        }
    });

    if (eid) res.json(eid);
    else next();
});

router.delete('/:id', (req, res) => {
    // The DELETE request route simply removes a resource.
    const eid = eids.find((p, i) => {
        if (p.id == req.params.id) {
            eids.splice(i, 1);
            return true;
        }
    });

    if (eid) res.json(eid);
    else next();
});

module.exports = router;