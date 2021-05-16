<template>
  <div class="flex md12 xs12">
    <div class="row">
      <div class="flex xs4 md4">
        <div class="grid__container flex-center" style="min-width: 70px;">
          <img :src="logo" :alt="mainTitle" id="logo-customer" width="70px">
        </div>
      </div>
      <div class="flex xs8 md8">
        <div class="grid__container flex-left" style="min-width: 200px;" >
          <div class="va-card__header-title" style="color: rgb(35, 1, 88); display: inline-block; margin-top: 5px;">
            {{ mainTitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'customer-view-header',
  data () {
    return {
      mainTitle: this.customer.name,
      logo: this.customer.picture,
    }
  },
  props: {
    customer: Object,
  },
}
</script>

<style lang="scss">
</style>
