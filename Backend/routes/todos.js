const express = require("express");
const router = express.Router();
const Todos = require('../model/Todos');

router.get("/getAll", (req, res) => {
    console.log("get All todos chal raha hai")

    Todos.find({})
        .then(result => res.send(result))
        .catch(e => res.send(211, { message: e.message }))

})

router.post("/add", (req, res) => {
    const Todo = new Todos(req.body);

    Todo.save()
        .then(() => res.send({ message: "Todo Added successfully!" }))
        .catch(e => res.send({ message: e.message }))
})

router.delete("/delete", (req, res) => {
    console.log('Removing!!!!!!!!!!!');
    console.log('title', req.body.title);

    // Users.deleteOne({title: 'Title Of TODO'})
    // .then(result => res.send(result))
    // .catch(e => res.send({message: e.message}))

    Todo.delete({'title' : req.body.title}, (err, Todo) => {

        // As always, handle any potential errors:
        if (err) 
        return res.status(500).send(err);

        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "Todo successfully deleted",
            id: Todo.title
        };
        return res.status(200).send(response);
    });

})

module.exports = router;