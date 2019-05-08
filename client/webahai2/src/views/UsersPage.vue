<template>
  <div class="single-user">
  	<div v-if="loaded">
	   	<h3>user details</h3>
	   	<div class="card">
	      <div class="card-header">
	        header
	      </div>
	      <div class="card-body">
	      	<p >ID: {{userId}}</p>
	        <p >user Name: {{userName}}</p>
	        <p >user Price: ${{userPrice}}</p>
	        <button class="btn btn-success"> Buy Now</button>
	        <router-link :to="'/'" class="btn btn-primary"> Back </router-link>
	      </div>
		</div>
    </div>
    <div v-else> 
    	<h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
import db from '@/db'
export default {
  name: 'userPage',
  data () {
    return {
    	userId:'',
    	userName: '',
    	userPrice: '',
    	loaded: false
    }
  },
  beforeCreate (){
	  
	var docRef = db.collection('users').doc(this.$route.params.id);
	docRef.get().then((doc)=> {
	    if (doc.exists) {
	        console.log("Document data:", doc.data().user_id);
	        this.userId = doc.data().user_id
	        this.userName = doc.data().user_name
	        this.userPrice = doc.data().user_price
	        this.loaded = true
	    } else {
	        // doc.data() will be undefined in this case
	        console.log("No such document!");
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
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
</style>