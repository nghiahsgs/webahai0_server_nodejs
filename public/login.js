
// const app = new Vue({
//   el: "#app",
//   data: {
//     bobby: {
//       name: "Bobby Boone",
//       age: 25
//     },
//     john: {
//       name: "John Boby",
//       age: 35,
//     }
//   },
//   template: `
//     <div>
//       <h2>Name: {{john.name}}</h2>
//       <h2>Age: {{john.age}}</h2>
//       <h2>Name: {{bobby.name}}</h2>
//       <h2>Age: {{bobby.age}}</h2>
//     </div>
//   `
// })

// const app=new Vue({
//   el:"#app",
//   data:{
//     friends:[]
//   },
//   methods:{

//   },
//   mounted(){
//     setTimeout(function(){
//       this.friends=[
//         {age:20,name:"nguyen ba nghia"},
//         {age:21,name:"nguyen ba nghia2"},
//         {age:22,name:"nguyen ba nghia3"}
//       ]
//     },2000);
//   },
//   template:`
//     <div>
//       <h2>gat</h2>
//       <ul>
//         <li v-for="friend in friends">{{friend.name}}</li>
//       </ul>
//     </div>
//   `



// })


new Vue({
  el: '#app',
  data () {
    return {
      info: null,
      username:"",
      password:""
    }
  },
  methods:{
     getdata(){
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
    },
    login(){
      console.log(this.username);
      console.log(this.password);
      
      axios.post('/login', {
        username:this.username,
        password: this.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    }
  },
  mounted () {
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
  }
})