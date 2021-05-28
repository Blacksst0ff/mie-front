<template>
  <div class="customer-view">
    <customer-view-header class="my-3" :customer=customer :deal=dealsAttached />
    <va-tabs grow v-model="tabValue" style="width: 100%;">
      <va-tab
        v-for="title in tabTitles"
        :key="title"
      >
        {{title}}
      </va-tab>
    </va-tabs>
    <div class="content-va-tabs">
      <div v-if="tabValue == 0">
        <customer-view-info :customer=customer />
      </div>

      <div v-if="tabValue == 2">
        <customer-view-user :users=usersAttached />
        <va-inner-loading class="flex-center py-3" :loading="isLoading">
          <va-button
            class="justify--center"
            outline
            icon="fa fa-plus"
            @click="addUser()"
          >
            {{ $t('buttons.add') }}
          </va-button>
        </va-inner-loading>
        <va-modal
          v-model="showCustomerAddUser"
          :okText=" $t('forms.add') "
          :cancelText=" $t('forms.cancel') "
          size="large"
        >
          <customer-add-user />
        </va-modal>
      </div>

      <div v-if="tabValue == 1">
        <customer-view-deal :deals=dealsAttached />
        <va-inner-loading
          v-if="customer.distinct_entity"
          class="flex-center py-3"
          :loading="isLoading"
        >
          <va-button
            class="justify--center"
            outline
            icon="fa fa-plus"
            @click="addDeal()"
          >
            {{ $t('buttons.add') }}
          </va-button>
        </va-inner-loading>
        <va-modal
          v-model="showCustomerAddDeal"
          :okText=" $t('forms.customer.add.submit.step1') "
          :cancelText=" $t('forms.cancel') "
          size="large"
        >
          <customer-add-deal :customer_id="customer.id" />
        </va-modal>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerViewHeader from './components/CustomerViewHeader'
import CustomerViewInfo from './components/CustomerViewInfo'
import CustomerViewUser from './components/CustomerViewUser'
import CustomerViewDeal from './components/CustomerViewDeal'
import CustomerAddUser from './components/CustomerAddUser'
import CustomerAddDeal from './components/CustomerAddDeal'

export default {
  name: 'CustomerView',
  components: {
    CustomerViewHeader,
    CustomerViewUser,
    CustomerViewInfo,
    CustomerViewDeal,
    CustomerAddUser,
    CustomerAddDeal,
  },
  data () {
    return {
      tabValue: 1, // Default tab to open
      isLoading: false, // Loading for openning modals add user or deal
      showCustomerAddUser: false,
      showCustomerAddDeal: false,
      hasContentSlot: true,
    }
  },
  computed: {
    customer () {
      return this.$store.getters.getCustomerByName(decodeURI(this.$props.name))
    },
    usersAttached () {
      return this.$store.getters.getCustomerUsersAttached(this.customer.users)
    },
    dealsAttached () {
      return this.$store.getters.getCustomerDealsAttached(this.customer.id)
    },
    tabTitles () {
      return [
        this.$t('customer.tab.first'),
        this.$t('customer.tab.third'),
        this.$t('customer.tab.second'),
      ]
    },
  },
  props: ['name'],
  methods: {
    addUser () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // Open Modal Add user
        this.showCustomerAddUser = true
      }, 500)
    },
    addDeal () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // Open Modal Add deal
        this.showCustomerAddDeal = true
      }, 500)
    },
  },
}
</script>

<style lang="scss">
.cards-container {
  .va-card {
    margin: 0;
  }
}

.empty-result {
  text-align: center;
  font-weight: bold;
}
</style>
