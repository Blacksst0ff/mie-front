<template>
  <va-timeline class="mb-4" v-if="timeline.length">
    <va-timeline-item v-for="(t, i) in timeline" :key="'timeline_user_' + i" v-bind:active=t.actif >
      <template slot="before">
        <div
          class="title text--center"
          :style="{color: $themes.primary}"
        >
          <va-badge color="primary" v-bind:outline="!t.actif" >{{t.badge}}</va-badge>
        </div>
        <div class="va-timeline-item__description">
          {{t.description}}
        </div>
      </template>
    </va-timeline-item>
  </va-timeline>
</template>

<script>

export default {
  name: 'customer-add-header-timeline',
  props: {
    step: String,
  },
  data () {
    return {
      order: [
        'customer_add',
        'customer_add_step2',
        'customer_add_step3',
      ],
    }
  },
  computed: {
    timeline () {
      return [
        {
          badge: '1',
          description: this.$t('forms.customer.add.step1'),
          route_name: 'customer_add',
          actif: this.isActive('customer_add'),
        },
        {
          badge: '2',
          description: this.$t('forms.customer.add.step2'),
          route_name: 'customer_add_step2',
          actif: this.isActive('customer_add_step2'),
        },
        {
          badge: '3',
          description: this.$t('forms.customer.add.step3'),
          route_name: 'customer_add_step3',
          actif: this.isActive('customer_add_step3'),
        },
      ]
    },
  },
  methods: {
    isActive (routeName) {
      if (routeName === this.$route.name) {
        return true
      }
      var indexToSearch = this.order.findIndex((t) => t === routeName)
      var indexCurrent = this.order.findIndex((t) => t === this.$route.name)
      return indexToSearch < indexCurrent
    },
  },
}
</script>
