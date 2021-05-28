<template>
  <va-card class="mt-3">
    <customer-form :customer="customer" />
    <va-inner-loading class="flex-center py-3" :loading="isLoading">
      <va-button
        class="justify--center"
        outline
        icon="fa fa-save"
        @click="saveCustomer(customer.name)"
      >
        {{ $t('buttons.update') }}
      </va-button>
    </va-inner-loading>
  </va-card>
</template>

<script>
import CustomerForm from './CustomerForm.vue'

export default {
  components: { CustomerForm },
  name: 'customer-view-info',
  props: ['customer'],
  data () {
    return {
      isLoading: false,
    }
  },
  methods: {
    saveCustomer (name) {
      this.showToast(`${name} updated successfully`, {
        position: 'bottom-right',
      })
    },
  },
}
</script>
