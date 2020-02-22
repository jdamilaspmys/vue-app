var app = new Vue({
    el: '#app',
    data: {
        product : "product",
        image: '/assets/images/vmSocks-green-onWhite.jpg',
        inStock: true,
        details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
        variants: [
            { 
                variantId: 2234, 
                variantColor: "green",
                variantImage: "/assets/images/vmSocks-green-onWhite.jpg"

            },
            { 
                variantId: 2235, 
                variantColor: "blue",
                variantImage: "/assets/images/vmSocks-blue-onWhite.jpg"
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {            
            this.cart += 1
        },
        remove(){
            if(this.cart){
                this.cart -= 1
            }
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    },
})