var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/webahai2', {useNewUrlParser: true});

console.log("connect db success");

//create schema
 
// var phoneModel = mongoose.model('phone', new mongoose.Schema({ phone: String }));


// // Works
// // MyModel.findOne().then(function(error, result) { 
// // 	console.log(result)
// // });

// phoneModel.find({}).then(function(result){
// 	console.log(result)
// })
// console.log("nghiahsgs");
// // MyModel.create({phone:'09892929'},function(result){
// // 	console.log(result)
// // })

// // var newPhone=new phoneModel({
// // 	phone:"181881"
// // })
// // newPhone.save()

// // phoneModel.deleteOne({phone:900},function(result){
// // 	console.log(result)
// // })


// findById(): Tìm kiếm tài liệu theo id (mỗi tài liệu có một id duy nhất).
// findOne(): Tìm kiếm một tài liệu dựa theo tiêu chí đặt vào.
// findByIdAndRemove(), findByIdAndUpdate(), findOneAndRemove(), findOneAndUpdate(): Tìm kiếm một tài liệu theo id hoặc theo tiêu chí và sửa hoặc xoá nó. Đây là các mẫu có ích khi cần phải tìm kiếm và chỉnh sửa.

// https://developer.mozilla.org/vi/docs/Learn/Server-side/Express_Nodejs/mongoose