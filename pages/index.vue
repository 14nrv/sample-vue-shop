<template>
  <main class="capsule">
    <app-masthead/>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in products"
          :key="item.name"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import AppSidebar from '@/components/AppSidebar.vue'
import AppMasthead from '@/components/AppMasthead.vue'
import AppItem from '@/components/AppItem.vue'

export default {
  components: {
    AppSidebar,
    AppMasthead,
    AppItem
  },
  computed: {
    ...mapGetters(['products', 'highprice'])
  }
}
</script>

<style>
/* no grid support */
aside {
  float: left;
  width: 19.1489%;
}

.content {
  /*no grid support*/
  float: right;
  width: 79.7872%;
  /* grid */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}

@supports (display: grid) {
  .capsule > * {
    width: auto;
    margin: 0;
  }
}
</style>
