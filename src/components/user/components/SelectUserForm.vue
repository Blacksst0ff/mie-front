<template>
  <form>
    <va-select
      :label="$t('forms.customer.add.user.select')"
      v-model="searchableUsers"
      searchable
      textBy="name"
      :options="users"
    />
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'select-user-form',
  props: {
    customer: Object,
  },
  data () {
    return {
      searchableUsers: '',
    }
  },
  computed: {
    ...mapGetters({
      getAllUser: 'getAllUser',
    }),
    users () {
      return this.getAllUser
    },
  },
}
</script>

<style lang="scss">
</style>
