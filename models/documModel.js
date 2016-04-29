var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var documModel = new Schema({
title: {type:String},
description: {type:String},
pays:{type:String},
date:{type:Date,default:Date.now()},
vu: {type:Boolean,default:false}
});

module.exports=mongoose.model('Docum',documModel);
