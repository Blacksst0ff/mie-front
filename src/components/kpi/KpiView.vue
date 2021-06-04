<template>
  <div class="kpi-view">
    <kpi-view-header class="my-3" :kpi=kpi />
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
        <kpi-view-info :kpi=kpi />
      </div>

      <div v-if="tabValue == 1">
        <kpi-view-static :id=kpi.id />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import KpiViewHeader from './components/KpiViewHeader'
import KpiViewInfo from './components/KpiViewInfo'
import KpiViewStatic from './components/KpiViewStatic'

export default {
  name: 'KpiView',
  components: { KpiViewHeader, KpiViewStatic, KpiViewInfo },
  data () {
    return {
      tabValue: 1, // Default tab to open
      isLoading: false, // Loading for openning modals add user or deal
    }
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      getSla: 'getSla',
    }),
    kpi () {
      return this.getSla(this.$props.id)
    },
    tabTitles () {
      return [
        this.$t('kpi.tab.first'),
        this.$t('kpi.tab.second'),
      ]
    },
  },
  methods: {
    addUser () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // Open Modal Add user
      }, 1000)
    },
    addDeal () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        // Open Modal Add deal
      }, 1000)
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
