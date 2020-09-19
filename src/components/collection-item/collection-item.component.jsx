import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import './collection-item.styles.scss';
import {addItem} from '../../redux/cart/cart.action'


const CollectionItem =({item,addItem})=>{
    const {id,name,imageUrl,price}= item;
    return(
   <div className='collection-item'key={id}>
   <div className = 'image'
   style ={{
       backgroundImage: `url(${imageUrl})`
   }}
   />
       <div className='collection-footer'>
       <span className ='name'>{name}</span>
       <span className ='price'>{price}</span>
   </div>
      <CustomButton onClick={()=>addItem(item)} inverted> Add to Cart </CustomButton>
    
   </div>
 

)};


const mapDispatchToProps = dispatch =>({
   addItem: item => {
        return dispatch(addItem(item));
    }


})


export default connect(null,mapDispatchToProps)(CollectionItem);