import * as _ from 'lodash'

const $init = page => {
  page.$data = _.clone(page.data)
}

const $digest = page => {
  const _data = page.data
  const $data = page.$data
  const ready2set = {}

  for (let k in _data) {
    const _v = _data[k]
    const $v = $data[k]

    if (!_.isEqual(_v, $v)) {
      ready2set[k] = _v
      $data[k] = _.clone(_v)
    }
  }

  if (Object.keys(ready2set).length > 0) {
    page.setData(ready2set)
  }
}

export default { $init, $digest }
