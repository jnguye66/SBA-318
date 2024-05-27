// Initialize Router
const express = require("express");
const router = express.Router();

//Importing the data from characters.js
const chars = require('../data/characters.js');

/**
 * Base Route - /api/chars
 */

// Creating a GET route for the entire users database.
// This would be impractical in larger data sets.
router.get('/', (req, res) => {
    res.json(chars);
});

// Creating a simple GET route for individual chars,
// using a route parameter for the unique id.
router.get('/:id', (req, res, next) => {
    const char = chars.find((u) => u.id == req.params.id);
    if (char) {
        res.json(char);
    } else {
        // Sends the request to the error handling middlware
        next();
    }
});

// Creating a GET route that gets an individual character's
// skills using a route parameters for said character
router.get('/:id/skills', (req, res, next) => {
    const char = chars.find((u) => u.id == req.params.id);
    if (char) {
        res.redirect(`../../skills/${char.id}`);
    } else {
        next();
    }
})

// Creating a GET route that gets an individual character's
// eidolons using a route parameters for said character
router.get('/:id/eidolons', (req, res, next) => {
    const char = chars.find((u) => u.id == req.params.id);
    if (char) {
        res.redirect(`../../eidolons/${char.id}`);
    } else {
        next();
    }
})

//Creating a User (POST)
router.post('/', (req, res) => {
    // Within the POST request route, we create a new
    // user with the data given by the client.
    // We should also do some more robust validation here,
    // but this is just an example for now.
    if (req.body.name && req.body.username && req.body.email) {
        if (chars.find((u) => u.username == req.body.username)) {
            res.json({ error: 'Username Already Taken' });
            return;
        }

        const char = {
            id: chars[chars.length - 1].id + 1,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
        };

        chars.push(user);
        res.json(chars[chars.length - 1]);
    } else res.json({ error: 'Insufficient Data' });
});

router.patch('/:id', (req, res) => {
    // Within the PATCH request route, we allow the client
    // to make changes to an existing user in the database.
    const char = chars.find((u, i) => {
        if (u.id == req.params.id) {
            // iterating through the user object and updating each property with the data that was sent by the client
            for (const key in req.body) {
                chars[i][key] = req.body[key];
            }
            return true;
        }
    });

    if (char) res.json(char);
    else next();
});

router.delete('/:id', (req, res) => {
    // The DELETE request route simply removes a resource.
    const char = chars.find((u, i) => {
        if (u.id == req.params.id) {
            chars.splice(i, 1);
            return true;
        }
    });

    if (char) res.json(char);
    else next();
});


module.exports = router;