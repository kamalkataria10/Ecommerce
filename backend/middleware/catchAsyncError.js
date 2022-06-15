module.exports =theF=>(req,res,next)=>{
    Promise.resolve(theF(req,res,next)).catch(next)
}