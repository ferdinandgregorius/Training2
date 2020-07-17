const express = require('express');
const app = express();

app.use(express.json());

const courses=[
{id:1, name: 'course1'},
{id:2, name: 'course2'},
{id:3, name: 'course3'}
];

//HTTP request handler in route
app.get("/", (req,res)=>{
    res.send('Hello world how are you ?');
});

//HTTP request handler in API/Courses
app.get("/api/courses", (req, res) =>{
    res.send(courses);
});

//ROUTE PARAMETER
// /api/courses/1
app.get("/api/courses/:id", (req,res) => {
    //res.send(req.params.id);

    //In order to get the value from the essential value using the method -->params
    //In order to get the value from query string/optional value, using the method -->query
    //res.send(req.query);
    const course=course.find(c=>c.id=== parseInt(req.params.id) );
    if(!course) res.status(404).send('The course with the given id is not found');
    res.send(course);
        //object/resource not found
        //404 -> object not found
        //400 -> bad request
        //200 -> ok
});

//POST -> to create data
app.post("/api/courses/", (req, res)=>{
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

//Port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});