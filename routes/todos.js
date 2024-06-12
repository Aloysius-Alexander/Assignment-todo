const express = require('express')
const router = express.Router()
const Todo = require('../model/todo')


router.get('/', async(req,res)=> {
   try{
     const todos = await Todo.find()
     res.json(todos)
   }catch(err){
    res.send('Error' + err)
   }
})

router.get('/:id', async(req,res)=> {
    try{
      const todo = await Todo.findById(req.params.id)
      res.json(todo)
    }catch(err){
     res.send('Error' + err)
    }
 })

router.post('/', async(req,res)=>{
    const todo = new Todo({
        name: req.body.name,
        place: req.body.place,
        verified: req.body.verified
    })

    try{
        const a1= await todo.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const todo =await Todo.findById(req.params.id)
        todo.verified = req.body.verified
        const a1 = await todo.save()
        res. json(a1)
    }catch(err){
        res.send('Error')
    }
})
router.delete('/:id', async (req, res) => {
try{
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).send('Todo not found');
    res.send('Todo deleted');
} catch (err) {
    res.send('Error: ' + err);
}
})
router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = {
            name: req.body.name,
            place: req.body.place,
            verified: req.body.verified
        };

        const todo = await Todo.findByIdAndUpdate(req.params.id, updatedTodo, { new: true });
        if (!todo) return res.status(404).send('Todo not found');

        res.json(todo);
    } catch (err) {
        res.send('Error: ' + err);
    }
});
module.exports = router