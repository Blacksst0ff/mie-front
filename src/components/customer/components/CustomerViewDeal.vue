<template>
  <va-list fit>
    <va-list-label :style="{color:this.$themes.primary}">
      {{ $t('customer.deal.title') }}
    </va-list-label>
    <template v-if="emptyDeal()">
      <div class="empty-result">
        Nobody is attached to this customer yet!
      </div>
    </template>
    <template v-for="deal in deals">
      <va-item :key="'item' + deal.id">
        <va-item-section side>
          <va-icon v-if="deal.warning" name="fa fa-warning" color="warning" />
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
            flat small
            color="red"
            icon="fa fa-trash"
            @click="deleteDeal(deal.id)"
          />
        </va-item-section>
      </va-item>
    </template>

  </va-list>
</template>

<script>

export default {
  name: 'customer-view-deal',
  props: {
    deals: Array,
  },
  methods: {
    deleteDeal (id) {
      const i = this.deals.findIndex(deal => deal.id === id)
      this.deals.splice(i, 1)
    },
    notify (name) {
      this.showToast(`Clicked ${name}`, {
        position: 'bottom-right',
      })
    },
    emptyDeal () {
      return !this.deals
    },
  },
}
</script>
