<template>
  <va-card
    no-padding
    style="overflow-x: auto;"
    :title="$t('forms.customer.add.deal.title')"
  >
    <deal-form :deal="deal" />
  </va-card>
</template>

<script>
import DealForm from '../../deal/components/DealForm.vue'

export default {
  name: 'form-elements',
  components: { DealForm },
  props: {
    customer_id: {
      type: String,
      requiered: true,
    },
  },
  data () {
    return {
      deal: {
        id: '',
        name: '',
        client_id: this.customer_id,
        mode_id: '',
        model_id: '',
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
