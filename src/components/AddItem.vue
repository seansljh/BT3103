<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        <label>Item Category</label>
        <input type="text" v-model.lazy="item.category"/>
        <label> Potential Allergens </label>
        <input type ="text" v-model.lazy="item.allergens"/>
        <label> Vegan? </label>
        <input type = "button" name = "Yes" value = "Yes" v-on:click='is_Vegan()'/>
        <input type = "button" name = "No" value = "No" v-on:click='is_not_Vegan()'/>
        <p></p>
        <button v-on:click.prevent="addItem">Add Item</button>
        
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {

  data(){
    return{
        msg:"Add Item",
        item:{
          name:'',
          category:'',
          allergens:'',
          vegan:''
        },
        
        
        }
  },
  methods:{
    addItem:  function () {
          //Save item to database
          database.collection('items').doc().set(this.item);
          this.item.name="";
          this.item.category="";
          this.item.allergens="";
          alert("I am in the DB .... :-) Item saved successfully")
          
        },
    is_Vegan: function() {
      this.item.vegan = 'Yes'
    },
    is_not_Vegan: function() {
      this.item.vegan = 'No'
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>