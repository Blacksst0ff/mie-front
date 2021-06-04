<template>
  <div>
    <div class="row align--center">
      <div class="flex xs12 md6">
        <va-input
          :value="term"
          :placeholder="$t('tables.searchByName')"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>

      <div class="flex xs12 md3 offset--md3">
        <va-select
          v-model="perPage"
          :label="$t('tables.perPage')"
          :options="perPageOptions"
          noClear
        />
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="filteredData"
      :per-page="parseInt(perPage)"
      @row-clicked="showCustomer"
      clickable
    >
      <template slot="trend" slot-scope="props">
        <va-icon :name="getTrendIcon(props.rowData)" :color="getTrendColor(props.rowData)" />
      </template>

      <template slot="actions" slot-scope="props">
        <va-button v-if="props.rowData.hasReport" small color="danger" class="ma-0">
          {{ $t('tables.report') }}
        </va-button>
      </template>
    </va-data-table>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  data () {
    return {
      term: null,
      customer: null,
      perPage: '10',
      perPageOptions: ['5', '10', '20'],
      customers: [],
    }
  },
  computed: {
    fields () {
      return [{
        name: '__slot:trend',
        width: '30px',
        height: '45px',
        dataClass: 'text-center',
      }, {
        name: 'name',
        title: this.$t('tables.headings.name'),
        width: '30%',
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
        width: '30%',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.customers
      }

      return this.customers.filter(item => {
        return item.name.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    getTrendIcon (user) {
      if (user.trend === 'up') {
        return 'fa fa-caret-up'
      }

      if (user.trend === 'down') {
        return 'fa fa-caret-down'
      }

      return 'fa fa-minus'
    },
    getTrendColor (user) {
      if (user.trend === 'up') {
        return 'success'
      }

      if (user.trend === 'down') {
        return 'danger'
      }

      return 'grey'
    },
    showCustomer (user) {
      this.$router.push({ name: 'customer_view', params: { name: encodeURI(user.name) } })
    },
    search: debounce(function (term) {
      this.term = term
    }, 400),
  },
}
</script>

<style lang="scss">
  #customer-view {
    min-width: 470px;
  }
</style>
