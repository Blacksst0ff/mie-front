<template>
  <va-card
    no-padding
    style="overflow-x: auto;"
    :title="$t('forms.customer.add.title')"
  >
    <va-timeline class="mb-4" style="min-width: 400px;">
      <va-timeline-item active>
        <template slot="before">
          <div
            class="title text--center"
            :style="{color: $themes.primary}"
          >
            <va-badge color="primary">1</va-badge>
          </div>
          <div class="va-timeline-item__description">
            {{$t('forms.customer.add.step1')}}
          </div>
        </template>
      </va-timeline-item>
      <va-timeline-item>
        <template slot="before">
          <div
            class="title text--center"
            :style="{color: $themes.primary}"
          >
            <va-badge color="primary" outline >2</va-badge>
          </div>
          <div class="va-timeline-item__description">
            {{$t('forms.customer.add.step2')}}
          </div>
        </template>
      </va-timeline-item>
      <va-timeline-item>
        <template slot="before">
          <div class="title title--gray text--center">
            <va-badge color="primary" outline >3</va-badge>
          </div>
          <div class="va-timeline-item__description">
            {{$t('forms.customer.add.step3')}}
          </div>
        </template>
      </va-timeline-item>
    </va-timeline>
    <customer-form :customer="customer" />
  </va-card>
</template>

<script>
import CustomerForm from './CustomerForm.vue'

export default {
  name: 'form-elements',
  components: { CustomerForm },
  data () {
    return {
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
