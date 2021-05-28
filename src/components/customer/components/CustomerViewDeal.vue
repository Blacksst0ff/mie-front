<template>
  <va-list fit>
    <template v-if="emptyDeal()">
      <div class="empty-result">
        Nobody is attached to this customer yet!
      </div>
    </template>
    <template v-for="deal in deals">
      <va-item id="list-deal" class="mt-1" :key="'item' + deal.id">
        <va-item-section side>
          <va-icon
            v-if="(typeof deal.sla === 'undefined') || deal.sla.length === 0"
            class="fa fa-angle-right va-collapse__header__icon"
          />
          <va-icon
            v-else
            class="fa fa-angle-down va-collapse__header__icon"
          />
        </va-item-section>

        <va-item-section>
          <va-item-label>
            {{ deal.name }}
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-button
            flat small
            icon="fa fa-pencil"
            @click="notify(deal.name)"
          />
          <va-button
            v-if="deals.length > 1"
            flat small
            color="red"
            icon="fa fa-trash"
            @click="deleteDeal(deal.id)"
          />
        </va-item-section>
      </va-item>
      <template v-for="kpi in getSlaDeal(deal.id)">
        <deal-kpi-view v-if="kpi" :key="'deal' + deal.id +'-kpi-view' + kpi.id" :id="kpi.id"/>
      </template>
    </template>
  </va-list>
</template>

<script>

import DealKpiView from '../../deal/DealKpiView'
import { mapGetters } from 'vuex'

export default {
  name: 'customer-view-deal',
  components: { DealKpiView },
  props: {
    deals: Array,
  },
  computed: {
    ...mapGetters({
      getSlaByDeal: 'getSlaByDeal',
    }),
  },
  methods: {
    deleteDeal (id) {
      this.$swal.fire({
        title: 'Delete Deal',
        text: 'Are you sure to delete it ?',
        icon: 'error',
        confirmButtonText: 'Delete',
        confirmButtonColor: '#dd6b55',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        showLoaderOnConfirm: true,
        preConfirm: (id) => {
          const i = this.deals.findIndex(deal => deal.id === id)
          const d = this.deals.splice(i, 1)
          const deleteDeal = d.shift()
          return this.notifyDelete(deleteDeal.name)
        },
      })
    },
    notify (name) {
      this.showToast(`Clicked ${name}`, {
        position: 'bottom-right',
      })
    },
    notifyDelete (name) {
      this.showToast(`${name} successfully deleted`, {
        position: 'bottom-right',
      })
    },
    emptyDeal () {
      return !this.deals
    },
    getSlaDeal (id) {
      return this.getSlaByDeal(id)
    },
  },
}
</script>

<style lang="scss">
#list-deal {
  background-color: rgba(157, 151, 202, 0.2);
  border-radius: 15px;
  font-weight: bold;
}
</style>
