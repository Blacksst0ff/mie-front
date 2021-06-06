<template>
  <div>
    <div class="cards-container row d-flex wrap align--start mt-3" v-if="isWallet()">
      <!-- eslint-disable vue/valid-v-for -->
      <template v-for="app in wallet_app">
        <div class="flex xs12 sm6 lg6 xl4" :key="app.id">
          <va-card
            overlay
            titleOnImage
            :image="app.img"
            :title="app.name"
          >
            <va-button
              slot="header"
              class="ma-0"
              :to="{ name: app.url }"
            >
              {{app.name}}
            </va-button>
          </va-card>
        </div>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'cards',
  computed: {
    wallet_app () {
      return [
        {
          id: '1',
          name: this.$t('wallet.customer'),
          img: '/img/wallet_app/clients.jpg',
          url: 'customer',
        },
        {
          id: '2',
          name: this.$t('wallet.deal'),
          img: '/img/wallet_app/affaires.jpg',
          url: 'deal',
        },
        {
          id: '3',
          name: this.$t('wallet.kpi'),
          img: '/img/wallet_app/kpi.jpg',
          url: 'kpi',
        },
      ]
    },
  },
  methods: {
    isWallet () {
      return this.$route.name === 'wallet'
    },
  },
}
</script>

<style lang="scss">
.cards-container {
  .va-card {
    margin: 0;
  }
}
</style>
