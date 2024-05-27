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

///////////////////////////////////////////////////////////////////////
/** API Routes */

// Char Route
app.use("/api/chars", charsRouter);
// Skills Route
app.use("/api/skills", skillsRouter);
// Eidolons Route
app.use("/api/eidolons", eidsRouter);

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

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});