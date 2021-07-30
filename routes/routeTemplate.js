import express from 'express'
let router = express.Router();

//import routers


//define routes

router.get('/', (req, res) => {
    res.send('route template')
})

export default router