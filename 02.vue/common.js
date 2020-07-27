import Vue from 'vue'
import qs from 'qs'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default function init() {
  Vue.prototype.$pagePush = function (path, params = {}) {
    const queryString = qs.stringify(params, {
      arrayFormat: 'repeat',
      skipNulls: true,
      addQueryPrefix: true
    })
    this.$router.push({
      path: `${path}${queryString}`
    })
  }

  const requireComponent = require.context(
    'components/v2',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
  )
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
      camelCase(
        fileName.split('/').pop().replace(/\.\w+$/, '')
      )
    )
  });
}