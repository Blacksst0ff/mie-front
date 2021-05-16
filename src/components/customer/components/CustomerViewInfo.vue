<template>
  <va-card class="mt-3">
    <form>
      <div class="row">
        <div class="flex md6 xs12">
          <va-input
            v-model="customer.name"
            placeholder="Customer Name"
          />
        </div>
        <div class="flex md6 xs12">
          <va-toggle
            v-model="customer.distinct_entity"
            small
            label="Distinct entity"
          />
        </div>
      </div>
      <div class="row">
        <div class="flex md6 xs12">
          <va-input
            v-model="customer.email"
            placeholder="Customer Email"
          >
            <va-icon
              slot="prepend"
              color="gray"
              name="fa fa-envelope-o"
            />
          </va-input>
        </div>
        <div class="flex md6 xs12">
          <va-input
            v-model="customer.phone"
            placeholder="Customer phone"
          >
            <va-icon
              slot="prepend"
              color="gray"
              name="fa fa-phone"
            />
          </va-input>
        </div>
      </div>
      <div class="row">
        <div class="flex lg4 md6 xs12">
          <va-select
            :label="$t('forms.customer.country')"
            v-model="customer.country"
            :options="countriesList"
          />
        </div>
        <div class="flex lg8 md6 xs12">
          <va-input
            :label="$t('forms.customer.address')"
            v-model="customer.address"
            placeholder="Customer address"
          />
        </div>
      </div>
      <div class="row">
        <div class="flex">
          <va-file-upload
            type="single"
            v-model="logo"
          />
        </div>
      </div>
    </form>
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
import CountriesList from '../../../data/CountriesList'

export default {
  name: 'customer-view-info',
  props: ['customer'],
  data () {
    return {
      logo: [],
      countriesList: CountriesList,
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
