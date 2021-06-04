<template>
  <div>
    <select-user-form />
    <va-inner-loading
      class="flex-center py-3"
      :loading="isLoading"
    >
      <va-button
        class="justify--center"
        :to="{name:'customer_add_step2'}"
      >
        {{ $t('buttons.undo') }}
      </va-button>
      <va-button
        class="justify--center"
        outline
        @click="addCustomer()"
      >
        {{ $t('buttons.add') }}
      </va-button>
    </va-inner-loading>
  </div>
</template>

<script>
import SelectUserForm from '../user/components/SelectUserForm'

export default {
  name: 'customer-add-step-3',
  components: { SelectUserForm },
  data () {
    return {
      isLoading: false,
    }
  },
  methods: {
    addCustomer () {
      // Save Customer and other attached object (deal / user)
      this.isLoading = true
      this.notify()
      setTimeout(() => {
        this.isLoading = false
        this.$router.push({ name: 'customer' })
      }, 500)
    },
    notify () {
      this.showToast('Customer add successfully', {
        position: 'bottom-right',
      })
    },
  },
}
</script>
