import axios from "axios"


var url="api/users"
class userService{
    static getData=new Promise(async function(resolve,reject){
        var data=await axios.get(url);
        // console.log(data)
        resolve(data)
    })
}

export default userService