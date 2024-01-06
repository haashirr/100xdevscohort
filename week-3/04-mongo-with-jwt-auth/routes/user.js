const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const { Admin, User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username
    const password = req.headers.password
    await User.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin created successfully."
    })
});

router.post('/signin', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username
    const password = req.headers.password
    const user = await User.find({
        username,
        password
    })  
    if(user) {
        // to generate a new encrypted token string
        const token = jwt.sign({
            username
        }, JWT_SECRET)
        res.json({
            token
        })
    }
    else {
        res.status(411).json({
            msg: "Incorrect username or pass"
        })
    }
});

router.post('/courses', userMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg: "Course created successfully."
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })
});

module.exports = router;