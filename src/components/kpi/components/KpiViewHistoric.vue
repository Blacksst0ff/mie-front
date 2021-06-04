<template>
  <va-list fit class="mb-2">
    <template v-for="(h, i) in historics">
      <va-item :key="'item' + h.id" clickable @click="showHistoric = true">
        <va-item-section avatar>
          <va-avatar>
            <img :src="getUserPicture(h.user_id)" :alt="h.name">
          </va-avatar>
        </va-item-section>

        <va-item-section>
          <va-item-label>
            {{ getUserName(h.user_id)}}
          </va-item-label>

          <va-item-label caption>
            Modified "{{ h.change }}"
          </va-item-label>
        </va-item-section>

        <va-item-section side>
          <va-badge class="mb-2" color="primary">{{ h.date }}</va-badge>
        </va-item-section>
      </va-item>
      <va-modal
        v-model="showHistoric"
        :key="'modal' + h.id"
        okText="Close"
        cancelText=""
      >
        <historic-card :historic="h" />
      </va-modal>
      <va-list-separator v-if="i < historics.length - 1" :key="'separator' + h.id" />
    </template>
  </va-list>
</template>

<script>
import { mapGetters } from 'vuex'
import HistoricCard from './KpiViewHistoricCard'

export default {
  name: 'kpi-view-historic',
  components: {
    HistoricCard,
  },
  props: {
    id: String,
  },
  data () {
    return {
      historics: [
        {
          id: '1',
          sla_id: '1',
          user_id: '2',
          change: 'seuil',
          old_value: 95,
          value: 90,
          date: '28/02/21',
        },
        {
          id: '2',
          sla_id: '1',
          user_id: '2',
          change: 'operator',
          old_value: '>',
          value: '⩾',
          date: '29/02/21',
        },
      ],
      showHistoric: false,
      hasContentSlot: true,
    }
  },
  computed: {
    ...mapGetters({
      getUserPicture: 'getUserPicture',
      getUserName: 'getUserName',
    }),
  },
  methods: {
  },
}
</script>

<style lang="scss">
</style>
