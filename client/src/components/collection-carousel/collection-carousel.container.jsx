import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionCarousel from './collection-carousel.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state),
});

const CollectionCarouselContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionCarousel);

export default CollectionCarouselContainer;
