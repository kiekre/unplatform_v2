import { injectReducer } from '../../store/reducers'
import SubtoolComponent from './Subtool'

export default (store) => ({
  path : 'tools/:toolName/:subtoolName',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SubtoolFactory = require('../../containers/SubtoolContainer').default

      /*  Return getComponent   */
      cb(null, SubtoolFactory(SubtoolComponent))

    /* Webpack named bundle   */
  }, 'subtool')
  }
})
