module.exports.Hello =(req,res)=>{
    res.send('Hello Word!')
}


module.exports.SEND_DATA=(req,res)=>{
    console.log(req.body)
}