<template>
  <div class="customer-view">
    <customer-view-header class="my-3" :customer=customer />
    <va-tabs grow v-model="tabValue" style="width: 100%;">
      <va-tab
        v-for="title in tabTitles"
        :key="title"
      >
        {{title}}
      </va-tab>
    </va-tabs>
    <div class="content-va-tabs">
      <div v-if="tabValue == 0">
        <customer-view-info :customer=customer />
      </div>

      <div v-if="tabValue == 1">
        <customer-view-user :users=customer.user />
        <va-inner-loading class="flex-center py-3" :loading="isLoading">
          <va-button
            class="justify--center"
            outline
            icon="fa fa-plus"
            @click="addUser()"
          >
            {{ $t('buttons.add') }}
          </va-button>
        </va-inner-loading>
      </div>

      <div v-if="tabValue == 2">
        <customer-view-deal :deals=customer.deal />
        <va-inner-loading class="flex-center py-3" :loading="isLoading">
          <va-button
            class="justify--center"
            outline
            icon="fa fa-plus"
            @click="addDeal()"
          >
            {{ $t('buttons.add') }}
          </va-button>
        </va-inner-loading>
      </div>
    </div>
  </div>
</template>

<script>
import customers from './components/data/customers.json'
import CustomerViewHeader from './components/CustomerViewHeader'
import CustomerViewInfo from './components/CustomerViewInfo'
import CustomerViewUser from './components/CustomerViewUser'
import CustomerViewDeal from './components/CustomerViewDeal'

export default {
  name: 'CustomerView',
  components: { CustomerViewHeader, CustomerViewDeal, CustomerViewUser, CustomerViewInfo },
  data () {
    return {
      customer: null, // Init customer
      tabValue: 0, // Default tab to open
      isLoading: false, // Loading for openning modals add user or deal
    }
  },
  computed: {
    tabTitles () {
      return [
        this.$t('customer.tab.first'),
        this.$t('customer.tab.second'),
        this.$t('customer.tab.third'),
      ]
    },
  },
  props: ['id'],
  created () {
    const i = customers.findIndex(customer => customer.id === this.id)
    this.customer = customers[i]
  },
  methods: {
    addUser () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // Open Modal Add user
      }, 1000)
    },
    addDeal () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // Open Modal Add deal
      }, 1000)
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

.empty-result {
  text-align: center;
  font-weight: bold;
}
</style>
