const Product= require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const AsyncErr=require('../middleware/catchAsyncError')
const ApiFeatures=require('../utils/apiFeatures')
exports.createProduct = AsyncErr(async(req,res,next) => {
    req.body.user=req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
})
exports.getAllProducts=AsyncErr(async(req,res) => {
    const resultPerPage = 8;
  const productsCount = await Product.countDocuments();
    const apiFeature=new ApiFeatures(Product.find(),req.query).search().filter();
    const product = await apiFeature.query;
    res.status(200).json({success:true,
        product,
    productsCount,
    resultPerPage});
})
exports.getProductDetails=AsyncErr(async(req,res,next) => {
    const product= await Product.findById(req.params.id);
    if(!product) 
    {
        return next(new ErrorHandler("product not found",404));
    }
    res.status(200).json({success:true,product});

})
exports.updateProduct = AsyncErr(async(req,res,next) => {
    let product=Product.findById(req.params.id);
    if(!product) 
    {
        return next(new ErrorHandler("product not found",404));
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({success:true,product})
})
exports.deleteProduct = AsyncErr(async(req,res,next) =>{
    const product= await Product.findById(req.params.id);
    if(!product) 
    {
        return next(new ErrorHandler("product not found",404));
    }
    await product.remove();
    res.status(200).json({success:true,message: "Product deleted successfully"})
})