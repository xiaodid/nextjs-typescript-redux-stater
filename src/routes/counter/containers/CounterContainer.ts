import { connect } from 'react-redux'
import { counterActions } from '../../../../src/routes/counter/modules/counter'
import { RootState } from '../../../../src/store/createStore';

import Counter from '../components/Counter'

const mapStateToProps = (state: RootState) => ({
  counter: state.counter.counter,
})

export default connect(mapStateToProps, counterActions)(Counter)
