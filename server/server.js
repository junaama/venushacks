const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const userRouter = require('./routes/user');
const videoRouter = require('./routes/video')
const forumRouter = require('./routes/forum');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.options("*", cors());

const port = process.env.PORT || 3000

app.use('/api/users', userRouter);
app.use('/api/video', videoRouter)
app.use('/api/forum', forumRouter);

app.listen(port, ()=> {
    console.log(`🚀 Server running on port ${port}!`)
})

module.exports = app;