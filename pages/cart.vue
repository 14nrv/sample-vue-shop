<template>
  <div class="capsule cart">

    <div v-if="cartTotal > 0">
      <h1>Cart</h1>
      <div class="cartitems"
           v-for="item in cart"
           :key="item.name">
        <div class="carttext">
          <h4>{{ item.name }}</h4>
          <p>{{ item.price | usdollar }} x {{ item.count }}</p>
          <p>Total for this item: <strong>{{ item.price * item.count }}</strong></p>
        </div>
        <button class="removeItem" @click="removeItem(item)">x</button>
        <img class="cartimg" :src="`/${item.img}`" :alt="`Image of ${item.name}`">
      </div>
      <div class="total">
        <h3>Total: {{ cartAmount | usdollar }}</h3>
      </div>
      <app-checkout :total="cartAmount" @successSubmit="success = true"></app-checkout>
    </div>

    <div v-else-if="cartTotal === 0 && success === false" class="empty">
      <h1>Cart</h1>
      <h3>Your cart is empty.</h3>
      <nuxt-link exact to="/"><button>Fill er up!</button></nuxt-link>
    </div>

    <div v-else>
      <app-success @restartCart="success = false"/>
      <h2>Success!</h2>
      <p>Your order has been processed, it will be delivered shortly.</p>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppCheckout from '@/components/AppCheckout.vue'
import AppSuccess from '@/components/AppSuccess.vue'

export default {
  data() {
    return {
      success: false
    }
  },
  components: {
    AppCheckout,
    AppSuccess
  },
  computed: {
    ...mapGetters(['cart', 'cartTotal', 'cartAmount'])
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`
    }
  },
  methods: {
    ...mapActions(['removeItem'])
  }
}
</script>

<style scoped>
.cart > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 50px;
  background: white;
  border-radius: 3px;
  margin-top: 10px;
  padding-bottom: 80px;
}

.cart.empty h1,
.cart.empty h3 {
  margin-bottom: 15px;
}

.cartitems {
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
  width: 500px;
}

.carttext {
  width: 250px;
  float: left;
}

.carttext p,
.carttext h4 {
  padding: 5px;
}

.cartimg {
  width: 100px;
  border: 1px solid #ccc;
  float: right;
}

.total {
  margin: 20px 0;
}

.removeItem {
  float: right;
  padding: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 13px;
  margin-top: 32px;
}
</style>
