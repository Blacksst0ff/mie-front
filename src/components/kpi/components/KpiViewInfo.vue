<template>
  <va-card class="mt-3">
    <kpi-form :kpi=kpi />
    <va-accordion>
      <va-collapse>
        <span slot="header"> Historique </span>
        <div slot="body">
          <kpi-view-historic :id="kpi.id" />
        </div>
      </va-collapse>
    </va-accordion>
  </va-card>
</template>

<script>
import KpiForm from './KpiForm.vue'
import KpiViewHistoric from './KpiViewHistoric.vue'

export default {
  name: 'kpi-view-info',
  components: { KpiViewHistoric, KpiForm },
  props: {
    kpi: Object,
  },
}
</script>
