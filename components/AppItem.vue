<template>
  <div class="item">
    <p class="item-name">{{ item.name }}</p>
    <span class="salepill" v-if="item.sale">Sale</span>
    <img :src="`/${item.img}`" :alt="`Image of ${item.name}`">
    <p clas="item-price">{{ item.price | usdollar }}</p>
    <button class="add" @click="addItem(item)">Add Item</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`
    }
  },
  methods: {
    ...mapActions(['addItem'])
  }
}
</script>

<style scoped>
.item {
  border-radius: 5px;
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.salepill {
  background: rgb(232, 35, 25);
  color: white;
  font-family: 'Barlow', sans-serif;
  position: absolute;
  right: 30px;
  top: 60px;
  padding: 2px 10px 4px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  border-radius: 1000px;
}

p {
  font-size: 18px;
}
</style>