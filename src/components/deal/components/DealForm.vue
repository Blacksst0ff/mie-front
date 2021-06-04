<template>
  <form>
    <div class="row">
      <div class="flex xs12 px-1">
        <va-input
          v-model="deal.name"
          :placeholder=" $t('forms.customer.name') "
        />
      </div>
    </div>
    <div class="row">
      <div class="flex md6 xs12 px-1">
        <va-select
          :label="$t('forms.customer.add.deal.mode')"
          v-model="dealModeName"
          textBy="name"
          :options="modes"
        />
      </div>
      <div class="flex md6 xs12 px-1">
        <va-select
          :label="$t('forms.customer.add.deal.model')"
          v-model="dealModelName"
          textBy="name"
          :options="models"
        />
      </div>
    </div>
    <div class="row">
      <div class="flex xs12 px-1">
        <va-select
          :label="$t('forms.customer.add.deal.customer')"
          v-model="currentCustomer.name"
          :disabled="notEditable"
          textBy="name"
          :options="customers"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'deal-form',
  props: {
    deal: Object,
  },
  computed: {
    ...mapGetters({
      myCustomer: 'myCustomer',
      getCustomer: 'getCustomer',
      getDealMode: 'getDealMode',
      getDealModel: 'getDealModel',
      getAllDealModes: 'getAllDealModes',
      getAllDealModels: 'getAllDealModels',
    }),
    modes () {
      return this.getAllDealModes
    },
    models () {
      return this.getAllDealModels
    },
    dealModeName () {
      return this.deal.mode_id !== '' ? this.getDealMode(this.deal.mode_id).name : ''
    },
    dealModelName () {
      return this.deal.model_id !== '' ? this.getDealModel(this.deal.model_id).name : ''
    },
    customers () {
      return this.myCustomer('2')
    },
    currentCustomer () {
      return this.getCustomer(this.deal.client_id) || { name: '' }
    },
    notEditable () {
      return this.$router.history.current.name !== 'deal_add'
    },
  },
  methods: {

  },
}
</script>

<style lang="scss">
.va-modal--size-large {
  min-width: 360px;
}
</style>
