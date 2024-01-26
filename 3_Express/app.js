const express = require('express');
const morgan = require('morgan')
const myMiddleware = require('./middleware/middle')

const app = express();

app.use(express.json());

app.use(myMiddleware)

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Hello World from ravi')
});


app.get('/about', (req, res) => {
    res.send('Ravi is good boy')
});

let courses = [
    {
        id: 1,
        name: 'System Design'
    },
    {
        id: 2,
        name: 'React',
    },
    {
        id: 3,
        name: 'Node',
    }
]

app.get('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given id was not found');
    res.send(course)
})

app.get('/courses', (req, res) => {
    res.send(courses)    
})

app.post('/courses', (req, res) => {
    console.log('req.body', req.body)
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
})

app.put('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given id was not found');
    course.name = req.body.name
    res.send(course)
})


app.delete('/courses/:id', (req, res) => {
    let updatedCourses = courses.filter(course => course.id !== parseInt(req.params.id));
    courses = updatedCourses
    res.send(courses)
})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));