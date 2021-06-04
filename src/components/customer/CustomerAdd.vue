<template>
  <div>
    <customer-add-header-timeline :step="this.$route.name" :key="this.$route.name" />
    <router-view />
  </div>
</template>

<script>
import CustomerAddHeaderTimeline from './components/CustomerAddHeaderTimeline.vue'

export default {
  name: 'customer-add',
  components: { CustomerAddHeaderTimeline },
}
</script>
