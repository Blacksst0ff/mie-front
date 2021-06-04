<template>
  <div class="form-elements">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('forms.customer.add.title')">
          <form>
            <div class="row">
              <div class="flex">
                <va-input
                  v-model="simple"
                  :placeholder="$t('forms.customer.name')"
                />
              </div>
            </div>
            <div class="row">
              <div class="flex">
                <va-input
                  v-model="withButton"
                  :placeholder="$t('forms.customer.logo')"
                >
                  <va-button slot="append" style="margin-right: 0;" small>
                    UPLOAD
                  </va-button>
                </va-input>
              </div>
            </div>
          </form>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import CountriesList from '../../../data/CountriesList'

export default {
  name: 'form-elements',
  data () {
    return {
      isMale: true,
      countriesList: CountriesList,
      chosenCountry: '',
      simple: '',
      withIcon: '',
      withButton: '',
      withDescription: '',
      clearableText: 'Vasili Savitski',
      successfulEmail: 'andrei@dreamsupport.io',
      wrongEmail: 'andrei@dreamsupport',
      messages: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua.'],
      errorMessages: ['Field should contain a valid email'],
      simpleOptions: [
        {
          id: 1,
          description: 'First option',
        },
        {
          id: 2,
          description: 'Second option',
        },
        {
          id: 3,
          description: 'Third option',
        },
      ],
      simpleSelectModel: '',
      multiSelectModel: [],
      multiSelectCountriesModel: [],
      searchableSelectModel: '',
      multiSearchableSelectModel: [],
      radioSelectedOption: 'option1',
      radioSelectedDisableOption: 'option1',
      checkbox: {
        unselected: false,
        selected: true,
        readonly: true,
        disabled: true,
        error: false,
        errorMessages: true,
      },
      toggles: {
        unselected: false,
        selected: true,
        disabled: true,
        small: false,
        large: false,
      },
      datepicker: {
        simple: '2018-05-09',
        time: '2018-05-08 14:10',
        range: '2018-05-08 to 2018-05-23',
        disabled: '2018-05-09',
        multiple: '2018-04-25, 2018-04-27',
        customFirstDay: '2018-05-09',
        customDate: '2017-Dec-06',
      },
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
  },
}
</script>

<style>
  .row.row-inside {
    max-width: none;
  }
</style>
