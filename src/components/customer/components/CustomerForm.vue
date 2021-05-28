<template>
  <form>
    <div class="row">
      <div class="flex md6 xs12 px-1">
        <va-input
          v-model="customer.name"
          :placeholder=" $t('forms.customer.name') "
        />
      </div>
      <div class="flex md6 xs12 px-1">
        <va-toggle
          v-model="customer.distinct_entity"
          small
          :label="$t('forms.customer.distinct_entity')"
        />
      </div>
    </div>
    <div class="row">
      <div class="flex md6 xs12 px-1">
        <va-input
          v-model="customer.email"
          :placeholder=" $t('forms.customer.email') "
        >
          <va-icon
            slot="prepend"
            color="gray"
            name="fa fa-envelope-o"
          />
        </va-input>
      </div>
      <div class="flex md6 xs12 px-1">
        <va-input
          v-model="customer.phone"
          :placeholder=" $t('forms.customer.phone') "
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
      <div class="flex lg4 md6 xs12 px-1">
        <va-select
          :label="$t('forms.customer.country')"
          v-model="customer.country"
          :options="countriesList"
        />
      </div>
      <div class="flex lg8 md6 xs12 px-1">
        <va-input
          :label="$t('forms.customer.address')"
          v-model="customer.address"
          :placeholder="$t('forms.customer.address')"
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
</template>

<script>
import CountriesList from '../../../data/CountriesList'

export default {
  name: 'customer-form',
  props: {
    customer: Object,
  },
  data () {
    return {
      logo: [],
      countriesList: CountriesList,
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="scss">
</style>
