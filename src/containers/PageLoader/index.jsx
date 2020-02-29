import Loader from '../../tools/PageLoader'
import { connect } from 'react-redux'



/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
 loading: state.Loading.loading
})

// const mapDispatchToProps = dispatch => ({
//   handlePageLoader: loading => dispatch(handlePageLoader(loading))
// })

export default connect(mapStateToProps, null)(Loader)