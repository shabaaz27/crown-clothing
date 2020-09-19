import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss';

const CollectonsOverview =({collections})=>(
<div className='collections-overview'>

{
              collections.map(({id,...collectionprops})=>(
              <CollectionPreview key ={id} {...collectionprops}/>

              )

              )}


</div>


);
const mapStateToProps =createStructuredSelector({
    collections : selectCollectionsForPreview

 });



 export default connect(mapStateToProps)(CollectonsOverview); 