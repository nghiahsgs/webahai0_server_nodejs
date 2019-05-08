<template>
  <div class="Users">
    <h3>Users</h3>
    <div class="card">
      <div class="card-header">
        Add a new user
      </div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label>ID</label>
            <input v-model="userData.user_id" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"  required>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input v-model="userData.user_name" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2">Add</button>
            
          </div>
        </form>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">
        user List
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  _id
                </th>
                <th>
                  fullname
                </th>
                <th>
                  isAdmin
                </th>
                <th>
                  password
                </th>
                <th>
                  username
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in Users" v-bind:key="user._id">
                <template v-if="editId == user._id">
                  <td><input v-model="edituserData.id" type="text"></td>
                  <td><input v-model="edituserData.name" type="text"></td>
                  
                  <td>
                    <span class="icon">
                      <i  @click="onEditSubmit(user._id)" class="fa fa-check"></i>
                    </span>
                    <span class="icon">
                      <i  @click="onCancel" class="fa fa-ban"></i>
                    </span>
                  </td>
                </template>

                <template v-else>
                  <td>
                    {{user._id}}
                  </td>
                  <td>
                    {{user.fullname}}
                  </td>
                  <td>
                    {{user.isAdmin}}
                  </td>
                  <td>
                    {{user.password}}
                  </td>
                  <td>
                    {{user.username}}
                  </td>
                  <td>

                    <a href="#" class="icon">
                      <i v-on:click="onDelete(user.id)" class="fa fa-trash"></i>
                    </a>
                    <a href="#" class="icon">
                      <i v-on:click="onEdit(user)" class="fa fa-pencil"></i>
                    </a>
                    <!-- <router-link 
                    :to="{
                      name:'userPage', 
                      params:{id: user.id}
                    }" 
                    class="icon"
                    >
                      <i class="fa fa-eye"></i>
                    </router-link> -->
                  </td>
                </template>
              </tr>

              

            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

import userService from "../userService"

export default {
  name: 'Users',
  data () {
    return {
      editId: '',
      userData: {
        'id' : '',
        'name': ''
        
        
      },
      edituserData: {
        '_id' : '',
        'fullname': '',
        'isAdmin' : '',
        'password': '',
        'username': ''
        
        
      },
      //mang user init
      Users:[]
    }
  },
  created() {
    
    this.getUsers()
  },
  computed:{
   
  },
  methods: {
    async getUsers() {

        var users=await userService.getData;

        this.Users=users.data; 

    },
    onSubmit(){
      console.log("onSubmit");
      this.userData.user_id = ''
      this.userData.user_name = ''
      
    },
    onDelete(id){
      console.log("onDelete id"+id);
    },
    onEdit(user){
      this.editId = user._id
      this.edituserData=user;
      
      
    },
    onCancel(){
      this.editId = ''
      this.edituserData.id = ''
      this.edituserData.name = ''
      
    },
    onEditSubmit (id){
        console.log("onEditSubmit"+id);
        this.getUsers();
        this.editId = ''
        this.edituserData.id = ''
        this.edituserData.name = ''
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon{
  margin-right: 10px;
}
.icon i{
  cursor: pointer;
}
</style>