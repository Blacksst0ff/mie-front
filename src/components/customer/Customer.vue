<template>
  <div class="customer">
    <va-card :title="$t('tables.customer.tableTitle')">
      <template slot="actions">
        <va-button
          v-if="isList()"
          icon="fa fa-plus"
          color="success"
          @click="showCustomerAddModal = true"
        >
          {{ $t('buttons.add') }}
        </va-button>
        <va-button
          v-if="isView()"
          outline small
          icon="fa fa-chevron-circle-left"
          color="gray"
          :to="{name: 'customer'}"
        >
          {{ $t('buttons.undo') }}
        </va-button>
      </template>
      <router-view :key="$route.name"></router-view>
      <va-modal
        v-model="showCustomerAddModal"
        :okText=" $t('forms.customer.add.submitText') "
        :cancelText=" $t('modal.cancel') "
      >
        <customer-add />
      </va-modal>
    </va-card>
  </div>
</template>

<script>

import CustomerAdd from './components/CustomerAdd'

export default {
  components: {
    CustomerAdd,
  },
  data () {
    return {
      showCustomerAddModal: false,
      hasContentSlot: true,
    }
  },
  methods: {
    isList () {
      return this.$router.history.current.name === 'customer'
    },
    isView () {
      return this.$router.history.current.name === 'customer_view'
    },
  },
}
</script>

<style lang="scss">
.customer {
  .va-card__header-actions {
    i {
      font-size: 16px;
    }
  }
}
</style>
