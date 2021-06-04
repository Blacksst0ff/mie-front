<template>
  <div class="row">
    <div class="flex xs12">
      <va-card title="Historic details">
        <template slot="actions">
          <va-badge class="ml-4" color="primary" outline>{{historic.date}}</va-badge>
        </template>
        <div class="row">
          <div class="flex xs12 my-2" id="histo_title">
            <va-badge class="mb-2" color="dark" outline>Modified {{historic.change}}</va-badge>
          </div>
        </div>
        <div class="row arrow">
          <div class="flex md4 xs6">
            <va-badge id="histo_value" color="info">{{historic.old_value}}</va-badge>
          </div>
          <div class="flex center md4 xs6">
            <va-icon
              id="arrow"
              :color="getAngleColor(historic)"
              :name="getAngle(historic)"
            />
          </div>
          <div class="flex md4 xs12">
            <va-badge id="histo_value" color="info">{{historic.value}}</va-badge>
          </div>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chips',
  props: {
    historic: Object,
  },
  methods: {
    getAngle (h) {
      if (h.change === 'seuil') {
        if (h.old_value > h.value) {
          return 'fa fa-angle-double-down'
        }

        return 'fa fa-angle-double-up'
      }

      return 'fa fa-angle-double-right'
    },
    getAngleColor (h) {
      if (h.change === 'seuil') {
        if (h.old_value > h.value) {
          return 'danger'
        }

        return 'success'
      }

      return 'grey'
    },
  },
}
</script>

<style lang='scss'>
#histo_value {
  font-size: 2.8rem;
}

#histo_title {
  text-align: center;
}

.arrow {
  text-align: center;
  font-size: 3.4rem;
  align-items: center;
  justify-content: center;
}
</style>
