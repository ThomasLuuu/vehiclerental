const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../src/models/user.model.js');
const { registerValidator } = require('../src/utils/auth.validation.js');

router.post('/register', async(req, res)=>{
    const {err} = registerValidator(req.body);
    
    if(err) return res.status(422).send(err.details[0].message);

    const checkEmailExist = await User.findOne({email: req.body.email});

    if(checkEmailExist) return res.status(422).send('this email already exists');
    const {username, email, password } = req.body;
    console.log(req.body.password);
    const newUser = new User({
        username,
        email,
        password
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password,salt ,(err, hash)=>{
            console.log(newUser.password)
            if(err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => console.log("succesful"))
                .catch(err => console.log(err))
                
        })
    })
    // const salt = await bcrypt.genSalt(10);
    // const hashCodePassword = await bcrypt.hash(req.body.password, salt);


    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: hashCodePassword,
    // });
    // try{
    //     const newUser = await user.save();
    //     await res.send(newUser);

    // }catch(err){
    //     res.status(400).send(err.details[0].message);
    // }
})

module.exports = router;