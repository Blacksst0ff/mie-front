<template>
  <form>
    <div class="row">
      <div class="flex xs12">
        <va-input
          v-model="kpi.name"
          placeholder="Kpi Name"
        />
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <va-input
          v-model="kpi.description"
          type='textarea'
          autosize
          placeholder="Kpi description"
        />
      </div>
    </div>
    <div class="row">
      <div class="flex lg3 md6 xs6">
        <va-select
          label="operator"
          v-model="kpi.operator"
          textBy="description"
          :options="operators"
          noClear
        />
      </div>
      <div class="flex lg3 md6 xs6">
        <va-input
          label="Seuil"
          v-model.number="kpi.seuil"
          type= "number"
          placeholder="100%"
        />
      </div>
      <div class="flex lg3 md6 xs12">
        <va-select
          label="Type de seuil"
          v-model="kpi.type_seuil"
          textBy="description"
          :options="types_seuil"
          noClear
        />
      </div>
      <div class="flex lg3 md6 xs12">
        <va-select
          label="Frequency"
          v-model="kpi.frequency"
          :options="frequencies"
          noClear
        />
      </div>
    </div>
    <va-inner-loading class="flex-center py-3" :loading="isLoading">
      <va-button
        class="justify--center"
        outline
        icon="fa fa-save"
        @click="saveKpi(kpi.name)"
      >
        {{ $t('buttons.update') }}
      </va-button>
    </va-inner-loading>
  </form>
</template>

<script>

export default {
  name: 'kpi-form',
  props: {
    kpi: Object,
  },
  data () {
    return {
      frequencies: ['day', 'month', 'year'],
      operators: ['>', '<', '⩾', '⩽'],
      types_seuil: ['percent', 'day'],
      isLoading: false,
    }
  },
  methods: {
    saveKpi (name) {
      this.showToast(`${name} updated successfully`, {
        position: 'bottom-right',
      })
    },
  },
}
</script>
