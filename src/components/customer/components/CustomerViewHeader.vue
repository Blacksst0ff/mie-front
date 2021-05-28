<template>
  <div class="flex md12 xs12">
    <div class="row">
      <div class="flex xs4 md4">
        <div class="grid__container flex-center">
          <img :src="logo" :alt="mainTitle" id="logo-customer" width="70px">
        </div>
      </div>
      <div class="flex xs6 md6">
        <div class="grid__container flex-left" style="min-width: 200px;" >
          <div class="va-card__header-title" style="color: rgb(35, 1, 88); display: inline-block; margin-top: 5px;">
            {{ mainTitle }}
          </div>
        </div>
      </div>
      <div class="flex-center xs2 md2">
        <va-badge
          v-if="getGlobalPercentageState() !== false"
          :color="getCustomerStateColor(globalPercent)"
        >
          <va-icon
            class='mr-1'
            :name="getCustomerState()"
            small
          />
          {{getGlobalPercentageState()}} %
        </va-badge>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const operators = {
  '>': function (a, b) { return a > b },
  '<': function (a, b) { return a < b },
  '⩾': function (a, b) { return a >= b },
  '⩽': function (a, b) { return a <= b },
}

export default {
  name: 'customer-view-header',
  data () {
    return {
      mainTitle: this.customer.name,
      logo: this.customer.picture,
      globalPercent: 0,
    }
  },
  props: {
    customer: Object,
    deal: Array,
  },
  computed: {
    ...mapGetters({
      getSlaByDeal: 'getSlaByDeal',
    }),
    allSla () {
      return [].concat.apply([], this.deal.map(d => { return this.getSlaByDeal(d.id) }))
    },
  },
  methods: {
    getCustomerState () {
      return 'fa fa-check-circle'
    },
    getCustomerStateColor (globalPercent) {
      if (globalPercent === 100) {
        return 'success'
      } else if (globalPercent >= 50) {
        return 'warning'
      }

      return 'danger'
    },
    countSlaOnSuccess () {
      let totalSlaSuccess = 0

      this.allSla.forEach(s => {
        if (operators[s.operator](s.result, s.seuil)) {
          totalSlaSuccess += 1
        }
      })

      return totalSlaSuccess
    },
    getGlobalPercentageState () {
      const totalSla = this.allSla.length

      if (totalSla === 0) {
        return false
      }

      const slaIn = this.countSlaOnSuccess()
      this.globalPercent = (slaIn / totalSla) * 100
      return this.globalPercent.toFixed(2)
    },
  },
}
</script>

<style lang="scss">
.va-notification {
  padding: 0;
}

.va-badge {
  font-size: 0.825rem;
}

.grid__container {
  min-width: 70px;
  max-height: 40px;
}
</style>
