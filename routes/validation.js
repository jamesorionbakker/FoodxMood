import express from 'express'
let router = express.Router();
import * as DB from '../db.js'

router.get('/username/:username', async (req, res) => {
    try {
        let {username} = req.params
        let response = await DB.User.exists({username})
        res.json(!response);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
});

export default router