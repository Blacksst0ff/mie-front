<template>
  <div class="customer">
    <va-card>
      <!-- <template slot="header">
        <breadcrumbs />
      </template> -->
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
        :okText=" $t('forms.customer.add.submit.step1') "
        :cancelText=" $t('forms.cancel') "
        size="large"
      >
        <customer-add />
      </va-modal>
    </va-card>
  </div>
</template>

<script>
import CustomerAdd from './components/CustomerAdd'
// import Breadcrumb from '../custom/Breadcrumb'

export default {
  components: {
    CustomerAdd,
  //  Breadcrumb,
  },
  data () {
    return {
      showCustomerAddModal: false,
      hasContentSlot: true,
    }
  },
  methods: {
    isList () {
      return this.$route.name === 'customer'
    },
    isView () {
      return this.$route.name === 'customer_view'
    },
  },
  computed: {
    getCurrentLinkName () {
      return this.$route.name
    },
  },
}
</script>

<style lang="scss">
.customer {
  .va-card__header-actions {
    i {
      font-size: 16px;
    }
  }
}

</style>
