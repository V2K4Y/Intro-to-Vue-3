const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeCart(id){
            const res = this.cart.indexOf(id)
            if(res >= 0)this.cart.splice(res,1)
            else alert('This product is not in cart yet!')
        }
    }
})
