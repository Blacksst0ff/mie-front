<template>
  <va-card
    no-padding
    style="overflow-x: auto;"
    :title="$t('forms.customer.add.user.title')"
  >
    <va-select
      :label="$t('forms.customer.add.user.select')"
      v-model="searchableSelectModel"
      searchable
      textBy="description"
      :options="filteredUsers"
    />
  </va-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'form-elements',
  data () {
    return {
      searchableSelectModel: '',
    }
  },
  computed: {
    ...mapGetters({
      getAllUser: 'getAllUser',
    }),
    filteredUsers () {
      return this.getAllUser.map(obj => {
        var tmpObj = {}
        tmpObj.id = obj.id
        tmpObj.description = obj.name
        return tmpObj
      })
    },
  },
}
</script>
