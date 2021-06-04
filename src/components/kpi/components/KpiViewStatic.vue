<template>
  <div class="row">
    <div class="flex md12 xs12">
      <va-card
        class="chart-widget"
      >
        <template slot="header" >
          <div class="row">
            <div class="flex center md6 xs9">
              <va-date-picker
                :label="$t('forms.dateTimePicker.range')"
                :config="{mode: 'range', inline: false}"
                v-model="range"
              />
            </div>
            <div class="flex center md6 xs3" style="text-align: right;">
              <va-button
                icon="fa fa-print"
                flat
                class="mr-0"
                @click="printChart"
              />
            </div>
          </div>
        </template>
        <va-chart class="chart--indicator" :data="chartData" :options="chartOption" type="line"/>
      </va-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { hex2rgb } from '../../../services/vuestic-ui'

export default {
  name: 'kpi-view-static',
  props: {
    id: String,
  },
  data () {
    return {
      range: '2021-01-01 to 2021-05-25',
      chartOption: {
        legend: {
          position: 'bottom',
          labels: {
            fontColor: '#34495e',
            fontFamily: 'sans-serif',
            fontSize: 14,
            padding: 20,
            usePointStyle: true,
          },
        },
        tooltips: {
          bodyFontSize: 14,
          bodyFontFamily: 'sans-serif',
        },
        responsive: false,
        maintainAspectRatio: true,
      },
    }
  },
  computed: {
    ...mapGetters({
      getSlaIndicators: 'getSlaIndicators',
    }),
    indicators () {
      return this.getSlaIndicators(this.$props.id)
    },
    months () {
      return [
        this.$t('months.january'),
        this.$t('months.february'),
        this.$t('months.march'),
        this.$t('months.april'),
        this.$t('months.may'),
        this.$t('months.june'),
        this.$t('months.july'),
        this.$t('months.august'),
        this.$t('months.september'),
        this.$t('months.october'),
        this.$t('months.november'),
        this.$t('months.december'),
      ]
    },
    chartData () {
      return {
        labels: this.getLabel(5), // months.splice(0, size),
        datasets: [
          {
            label: 'Indicator',
            backgroundColor: hex2rgb(this.$themes.primary, 0.6).css,
            borderColor: 'transparent',
            data: this.getData('value'),
          },
          {
            label: 'Seuil',
            backgroundColor: hex2rgb(this.$themes.info, 0.6).css,
            borderColor: 'transparent',
            data: this.getData('seuil'),
          },
        ],
      }
    },
    indicatorChartDataURL () {
      return document.querySelector('.chart--indicator canvas').toDataURL('image/png')
    },
  },
  methods: {
    getColumn (array, columnName) {
      return array.map(function (value) {
        return value[columnName]
      })
    },
    getLabel (size) {
      return this.months.splice(0, size)
    },
    getData (column) {
      return this.getColumn(this.indicators, column)
    },
    printChart () {
      const win = window.open('', 'Print', 'height=600,width=800')
      win.document.write(`<br><img src='${this.indicatorChartDataURL}'/>`)
      setTimeout(() => {
        win.document.close()
        win.focus()
        win.print()
        win.close()
      }, 200)
    },
  },
}
</script>

<style lang="scss">
.chart-widget {
  .va-card__body {
    height: 550px;
  }
}
</style>
