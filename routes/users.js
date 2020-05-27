const express = require('express');

const router = express.Router();

router.get('/login', (req,res) => res.render('login'));


router.get('/register', (req,res) => res.render('register'));

//TO REGISTER HANDLE WE POST TE REQUESE

router.post('/register',(req,res)=>{
    const {name,email,password,password2} = req.body;
    let errors=[];
    //CHECKING THE REQUIRED FIELDS 

    if(!name || !email || !password || !password2){

        errors.push({msg: 'please fill in all detaisl'});
    }

    //GIVING VALIDATIONS SUCH AS IN THIS CASE CONFIRM PASSWORD IS SAME AS PASSWORD
    
    if(password != password2) {
        errors.push({msg: 'passwords don not match'});
    }

    //IN THIS CASE WE ARE CHECKING WHEATHER THE PASSWORD IS GREATER THAN 6 CHARACTERS OR NOT

    if(password.length < 6) {
        errors.push({msg: 'password should be atleast 6 characters'});
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    }else {
        res.send("Yeah,u have succesfully registerd !!")
    }
    
});

module.exports=router;
