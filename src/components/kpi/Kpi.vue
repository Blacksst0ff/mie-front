<template>
  <div class="kpi">
    <va-card>
      <template slot="header">
        <Breadcrumbs />
      </template>
      <template slot="actions">
        <va-button
          v-if="isList()"
          icon="fa fa-plus"
          color="success"
          @click="showCustomerAddModal = true"
        >
          {{ $t('buttons.add') }}
        </va-button>
        <va-button
          v-if="isView ()"
          outline
          small
          icon="fa fa-chevron-circle-left"
          color="gray"
          :to="{name: 'customer'}"
        >
          {{ $t('buttons.undo') }}
        </va-button>
      </template>
      <router-view :key="$route.name"></router-view>
      <va-modal
        v-model="showCustomerAddModal"
        :okText=" $t('forms.customer.add.submitText') "
        :cancelText=" $t('modal.cancel') "
      >
        <kpi-add />
      </va-modal>
    </va-card>
  </div>
</template>

<script>
import KpiAdd from './components/KpiAdd'

export default {
  components: {
    KpiAdd,
  },
  data () {
    return {
      showCustomerAddModal: false,
      hasContentSlot: true,
    }
  },
  methods: {
    isList () {
      return this.$router.history.current.name === 'kpi'
    },
    isView () {
      return this.$router.history.current.name === 'kpi_view'
    },
  },
  computed: {
    getCurrentLinkName () {
      if (this.$route.name === 'kpi_view') {
        return { name: this.$route.name, id: this.$route.params.id }
      }

      return this.$route.name
    },
  },
}
</script>

<style lang="scss">
.kpi {
  .va-card__header-actions {
    i {
      font-size: 16px;
    }
  }
}

</style>
