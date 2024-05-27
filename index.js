const express = require('express');
const app = express();
const PORT = 3000;

// Importing new routers from posts folder
const charsRouter = require('./routes/charRoute.js');
const skillsRouter = require('./routes/skillRoute.js');
const eidsRouter = require('./routes/eidolonRoute.js');

///////////////////////////////////////////////////////////////////////
/** Middlewares */

// We use the body-parser middleware FIRST so that
// we have access to the parsed data within our routes.
// The parsed data will be located in "req.body".
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// New logging middleware to help us keep track of
// requests during testing!
app.use((req, res, next) => {
    const time = new Date();

    console.log(
        `-----
        ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    // This checks if there are keys in the req.body object (sent from the client)
    if (Object.keys(req.body).length > 0) {
        console.log('Containing the data:');
        console.log(`${JSON.stringify(req.body)}`);
    }
    next();
});

///////////////////////////////////////////////////////////////////////
/** API Routes */

// Char Route
app.use("/api/chars", charsRouter);
// Skills Route
app.use("/api/skills", skillsRouter);
// Eidolons Route
app.use("/api/eidolons", eidsRouter);

app.get('/chars/new', (req, res) => {
    res.sendFile('/views/newChar.html', {
        root: __dirname,
    });
});

///////////////////////////////////////////////////////////////////////
/** Base URL */
app.get('/', (req, res) => {
    res.send('Honkai Star Rail Wiki Homepage in Progress!');
});

///////////////////////////////////////////////////////////////////////
// Custom 404 (not found) middleware.
// Since we place this last, it will only process
// if no other routes have already sent a response!
// We also don't need next(), since this is the
// last stop along the request-response cycle.
app.use((req, res) => {
    res.status(404);
    res.json({
        error: 'Resource Not Found',
    });
});

// Error-handling middleware.
// Any call to next() that includes an
// Error() will skip regular middleware and
// only be processed by error-handling middleware.
// This changes our error handling throughout the application,
// but allows us to change the processing of ALL errors
// at once in a single location, which is important for
// scalability and maintainability.
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});