import LOTR from '../../pages/lotr'
import { connect } from 'react-redux'
import { handleFetchCharacters, handlePageLoader } from '../../store/actions'


/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
data: state.LOTR.data,
})

const mapDispatchToProps = dispatch => ({
handleFetchCharacters: ()=> dispatch(handleFetchCharacters()),
handlePageLoader: loading => dispatch(handlePageLoader(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(LOTR)