const UserModel = require("../model/UserModel")

exports.addUser = (req,res)=>{
    const user = new UserModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        age:req.body.age
    })

    user.save().
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

exports.getUser = (req,res)=>{
    const users = UserModel.find()

    users.
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

//q1
exports.getUserByName = (req,res) => {

    const user = UserModel.find({fname:req.query.fname})

    user.
    then((data) => {
        res.send(data)
    }).
    catch((error) => {res.send(error)})
}

//q2
exports.getNameAndAge = (req, res) => {
    const user = UserModel.find({},{fname:1,age:1})

    user
      .then((data) => {
        res.status(200).json({
            message:"Successgully got name and age",
            data:data,
        })
      })
      .catch((error) => {
        res.send(error);
      })
  }

//q3
exports.findRegex = (req,res) => {

    const user = UserModel.find({email:{$regex : ".*gmail.*"}})
    user
      .then((data) => {
        res.status(200).json({
            message:"found email with the given pattern",
            data:data,
        })
      })
      .catch((error) => {
        res.send(error);
      })
}

// update user age
exports.updateAge=(req,res)=>{

    UserModel.findOne({fname:"Apoorv"},(error,user)=>{

        if(error) res.send(error)

        user.age=req.body.age ? req.body.age: user.age

        user.save((error)=>{

            if(error) res.send(error)

            res.status(200).json({

                message:"Successfully updated age",

                data:user
            })
        })
    })
}

//increment user age
exports.incrementAge = (req,res) => {
    UserModel.updateOne({fname:"Saurabh"},{$inc:{age:25}},
    (data) => {
        res.status(200).json({
            message : "Successfully incremented User's Age",
            data : data
        })
    })
}

//delete user
exports.deleteUserByName = (req,res) => {
    UserModel.deleteOne({fname:req.query.fname}, () => {
        res.status(200).json({
            message : "Successfully deleted " +req.query.fname+ " User",
        })
    })
}




