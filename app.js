new Vue({
    el: '#app',
    data () {
      return {
            ProductList: null,
            Coin:[
                {               
                    value:10,
                    count:0,
                    active:false
                },
                {
                    value:5,
                    count:0,
                    active:false
                },
                {
                    value:2,
                    count:0,
                    active:false
                },
                {
                    value:1,
                    count:0,
                    active:false
                },
                {
                    cash:0
                }],
            showProduct:{
                name:null,
                price:null,
                show:false
            },            
            change:{
                value:0,
                ten:{
                    value:0,
                    active:false
                },
                five:{
                    value:0,
                    active:false
                },
                two:{
                    value:0,
                    active:false
                },
                one:{
                    value:0,
                    active:false
                },
                active:false,
                show:false,
                coin:0
            },
            reset:false
            
        }
        
    },
    mounted () {
      axios
        .get('https://www.mocky.io/v2/5c77c5b330000051009d64c9')
        .then(response => (this.ProductList = response.data.data))
    },methods:{
        
        insertCoin:function(id){
            this.Coin[id].active = true
            this.Coin[4].cash+=this.Coin[id].value

            this.change.value = this.Coin[4].cash-this.showProduct.price
            if (this.change.value>=0){
                this.change.active=true
            }else{this.change.active=false}
            return this.Coin[id].count++,change
        },
        show:function(item){
            // this.Product!=this.Product
            this.showProduct.name = item.name
            this.showProduct.price = item.price
            this.showProduct.show = true
            this.change.value = this.Coin[4].cash-this.showProduct.price
            if (this.change.value>=0){
                this.change.active=true
            }else{this.change.active=false}
            
            return showProduct,change
        },
        calculate:function(){
            this.change.ten.value = (this.change.value/10)|0
            this.change.coin = this.change.value%10
            this.change.five.value = (this.change.coin/5)|0
            this.change.coin = this.change.coin%5
            this.change.two.value = (this.change.coin/2)|0
            this.change.coin = this.change.coin%2
            this.change.one.value = this.change.coin
            
            if(this.change.ten.value!=0){
                this.change.ten.active=true
            }
            if(this.change.five.value!=0){
                this.change.five.active=true
            }
            if(this.change.two.value!=0){
                this.change.two.active=true
            }
            if(this.change.one.value!=0){
                this.change.one.active=true
            }
            
            
            this.change.show = true
            this.reset=true
            return this.change,this.reset
        },
        clear() {
            Object.assign(this.$data, this.initialData());
        },
        initialData(){
            return {
                Coin:[
                    {               
                        value:10,
                        count:0,
                        active:false
                    },
                    {
                        value:5,
                        count:0,
                        active:false
                    },
                    {
                        value:2,
                        count:0,
                        active:false
                    },
                    {
                        value:1,
                        count:0,
                        active:false
                    },
                    {
                        cash:0
                    }],
                showProduct:{
                    name:null,
                    price:null,
                    show:false
                },            
                change:{
                    value:0,
                    ten:{
                        value:0,
                        active:false
                    },
                    five:{
                        value:0,
                        active:false
                    },
                    two:{
                        value:0,
                        active:false
                    },
                    one:{
                        value:0,
                        active:false
                    },
                    active:false,
                    show:false,
                    coin:0
                },
                reset:false
            }
        }
    }    
})

