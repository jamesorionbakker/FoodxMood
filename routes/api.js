import express from 'express';
// import * as authenticate from '../components/authenticate.js'
import * as accessToken from '../components/accessToken.js'
let router = express.Router();

//import routers
import ingredients from './ingredients.js'
import symptoms from './symptoms.js'
import activity from './activity.js'
import suggestions from './suggestions.js'

router.use('/', accessToken.authenticate)
router.use('/ingredients', ingredients)
router.use('/symptoms', symptoms)
router.use('/activity', activity)
router.use('/suggestions', suggestions)

router.get('/', (req, res)=>{
    res.send('/api root')
})

export default router

