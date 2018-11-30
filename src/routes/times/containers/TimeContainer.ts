import Time from '../components/Time'
import { connect } from 'react-redux'

// that's OK, because connect() will export all static method of wrappedComponent
export default connect()(Time)
