var app = new Vue({
    el: '#app',
    data: {
        product : "product",
        image: '/assets/images/vmSocks-green-onWhite.jpg',
        inStock: true,
        details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
        variants: [
            { variantId: 2234, variantColor: "green"},
            { variantId: 2235, variantColor: "blue"}
        ]
    }
})