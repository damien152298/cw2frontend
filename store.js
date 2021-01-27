var webstore = new Vue({
    el: '#app',
    data: {
        showProduct: true,
        sitename: 'After School Club',
        order: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
        },
        products: products,
        

        cart: [], 

        checkOutCart: [],


    },
    methods:{
         addToCart(product) {
           this.cart.push(product.id);                   
           this.products.slots = - 1; 
            
        },

        addToCheckOutCart(product) {
           this.checkOutCart.push(product);
            
        },

        removeCart: function(index){
           this.cart.splice(index, 1);
           this.checkOutCart.splice(index, 1);
        },

        
        showCheckout: function() {
            this.showProduct = this.showProduct ? false: true;
        },

        submitForm(){
           alert('order has been placed')
       },
       canAddToCart(product) {
           return product.availableInventory > this.cartCount(product.id);
       },
       cartCount(id) {
           let count = 0;
           for (let i = 0; i < this.cart.length; i++) {
               if (this.cart[i] === id) {
                   count++;
               }
           }
           return count;
       },

       sortLowest(){
         this.products.sort((a,b) => a.price > b.price ? 1 : -1);
       },
       sortHighest(){
         this.products.sort((a,b) => a.price < b.price ? 1 : -1);
       },
       sortLowestSpace(){
         this.products.sort((a,b) => a.slots > b.slots ? 1 : -1);
       },
       sortHighestSpace(){
         this.products.sort((a,b) => a.slots < b.slots ? 1 : -1);
       },
       sortSubjectAsc(){
         console.log(this.products);
         this.products.sort(function (a, b) {
            if(a.title < b.title) {return -1;}
            if(a.title > b.title) {return 1;}
            return 0
         }); 
       },
       sortSubjectDes(){
         this.products.sort((a,b) => a.title > b.title ? -1 : 1);
         return 0
       },
       sortLocatioAsc(){
         this.products.sort((a,b) => a.description < b.description ? -1 : 1)
         return 0;
       },
       sortLocationDes(){
         this.products.sort((a,b) => a.description > b.description ? -1 : 1)
         return 0;
       },


      isLetter(e) {
         let char = String.fromCharCode(e.keyCode);
         if (/^[A-Za-z]+$/.test(char)) return true;
         else e.preventDefault();
},                         

    },
    
    computed:{
        cartItemCount: function(){
            return this.cart.length || '';
        },
        formFilled: function(){
            return this.order.firstName && this.order.lastName && this.order.phoneNumber === '';
        },
        cartFilled: function(){
            return this.cartItemCount == 0;
        },
    },
         firstNameValid() {
            return /^[A-Za-z]+$/.test(this.firstName);
}
});