const express = require("express")
const router = express.Router();
const User = require('../modals/User');

// /Create a user  using auth 
router.post('/', (req, res)=>{
    const user = User(req.body)
    // console.log(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router