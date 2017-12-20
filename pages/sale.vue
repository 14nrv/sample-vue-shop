<template>
  <main class="capsule">
    <div class="saleimg">
      <app-masthead img="bk-sale" title="Sale" bkcolor="#1ba079"/>
    </div>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice" :sale="true"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in saleProducts"
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
    ...mapGetters(['saleProducts', 'highprice'])
  }
}
</script>

<style>
.saleimg .ppl-banner {
  height: 105%;
}
</style>
