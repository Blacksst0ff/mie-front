<template>
  <va-card>
    <template slot="actions">
      <va-button
        v-if="mainRoute"
        icon="fa fa-plus"
        color="success"
        @click="AddObject($route.name)"
      >
        {{ $t('buttons.add') }}
      </va-button>
    </template>
    <router-view/>
  </va-card>
</template>

<script>
const ObjectCanBeAdd = [
  'customer',
  'deal',
  'kpi',
]

export default {
  name: 'component-layout',
  data () {
    return {
      mainRoute: true,
    }
  },
  watch: {
    $route () {
      this.main()
    },
  },
  methods: {
    main () {
      this.mainRoute = ObjectCanBeAdd.includes(this.$route.name)
    },
    AddObject (currentRouteName) {
      return this.$router.push({ name: currentRouteName + '_add' })
    },
  },
  mounted () {
    this.main()
  },
}
</script>

<style lang="scss">
</style>
