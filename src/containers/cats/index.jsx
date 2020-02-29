import Cats from '../../pages/cats'
import { connect } from 'react-redux'
import { handleFetchCats, handlePageLoader } from "../../store/actions";


/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
data: state.Cats.data,
count: state.Cats.paginationCount,
limit: state.Cats.paginationLimit,
page: state.Cats.paginationPage
})

const mapDispatchToProps = dispatch => ({
handleFetchCats: params => dispatch(handleFetchCats(params)),
handlePageLoader: loading => dispatch(handlePageLoader(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cats)