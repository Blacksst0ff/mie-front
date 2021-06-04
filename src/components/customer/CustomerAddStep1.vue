<template>
  <div>
    <customer-form :customer="customer" />
    <va-inner-loading
      class="flex-center py-3"
      :loading="isLoading"
    >
      <va-button
        class="justify--center"
        outline
        :to="{ name: 'customer_add_step2' }"
      >
        {{ $t('buttons.next') }}
      </va-button>
    </va-inner-loading>
  </div>
</template>

<script>
import CustomerForm from './components/CustomerForm.vue'

export default {
  name: 'customer-add-step-1',
  components: { CustomerForm },
  data () {
    return {
      isLoading: false,
      customer: {
        id: '',
        name: '',
        email: '',
        phone: '',
        picture: '',
        address: '',
        country: '',
        trend: '',
        hasReport: '',
        distinct_entity: '',
        users: [],
        deals: [],
      },
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
  },
}
</script>
