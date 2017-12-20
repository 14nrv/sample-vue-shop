<template>
  <main class="capsule">
    <app-masthead img="banner-ppl-women" title="Women's" bkcolor="#e82319"/>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in womenProducts"
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
    ...mapGetters(['womenProducts', 'highprice'])
  }
}
</script>
