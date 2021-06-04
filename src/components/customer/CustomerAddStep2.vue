<template>
  <div>
    <deal-form :deal="deal" />
    <va-inner-loading
      class="flex-center py-3"
      :loading="isLoading"
    >
      <va-button
        class="justify--center"
        :to="{name:'customer_add'}"
      >
        {{ $t('buttons.undo') }}
      </va-button>
      <va-button
        class="justify--center"
        outline
        :to="{name:'customer_add_step3'}"
      >
        {{ $t('buttons.next') }}
      </va-button>
    </va-inner-loading>
  </div>
</template>

<script>
import DealForm from '../deal/components/DealForm'

export default {
  name: 'customer-add-step-2',
  components: { DealForm },
  data () {
    return {
      isLoading: false,
      deal: {
        id: '',
        name: '',
        client_id: '',
        mode_id: '',
        model_id: '',
      },
    }
  },
}
</script>
