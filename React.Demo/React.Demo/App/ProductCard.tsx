import * as React from 'react';
import ProductImage from './ProductImage'
import CardFooter from './CardFooter';
import SingleStar from './SingleStar';
import CommentsButton from './CommentsButton';
import { Product } from './ProductList';


interface ProductProps {
    productObj: Object;
    /*name: string;
    thumbNailImage: string;
    images: string[];
    caption: string;
    summary: string;
    regularPrice: number;
    discountPrice: number;
    comment_count: number,
    isFav: boolean
    */
}

interface ProductCardProps{
    product: Product;
}


class ProductCard extends React.Component<ProductCardProps, any>{
    constructor(props) {
        super(props);
    }
    priceLineCreate() {
        let priceLine;
        if (this.props.product.regularPrice == this.props.product.discountPrice ) {
            priceLine = (<div><h4>$ {this.props.product.regularPrice}</h4></div>);
        } else {
            priceLine = (<div>
                <h4 className="green-text"> $
                { this.props.product.discountPrice}
                </h4>
                <h4>
                    <span className="outlined red-text">$
                        {this.props.product.regularPrice}
                    </span>
                </h4>
                </div>);
        }
        return priceLine;
    }
    render() {
        return (<div className="col-xs-18 col-sm-6 col-md-3">
                <div>
                <div className="thumbnail">
                    <ProductImage image_url={this.props.product.thumbnailImage} />
                </div>
                <div className="row">
                    <div className="col-md-3 col-xs-3 thumbnail">
                        <img className="img-responsive" src={this.props.product.thumbnailImage} />
                    </div>
                    <div className="col-md-3 col-xs-3 thumbnail">
                        <img className="img-responsive" src="https://feo.cdnrnd.com/ayakkabidunyasi/mnresize/300/300/Content/media/ProductImg/original/636277871474159648.jpg" />
                    </div>
                    <div className="col-md-3 thumbnail">
                        <img className="img-responsive" src="https://feo.cdnrnd.com/ayakkabidunyasi/mnresize/300/300/Content/media/ProductImg/original/636277871474159648.jpg" />
                    </div>
                    <div className="col-md-3 thumbnail">
                        <img className="img-responsive" src="https://feo.cdnrnd.com/ayakkabidunyasi/mnresize/300/300/Content/media/ProductImg/original/636277871474159648.jpg" />
                    </div>
                </div>
                <div className="caption">
                    <h2>{this.props.product.caption}</h2>
                    {this.priceLineCreate()}
                    <a href="#" className="btn btn-default btn-xs pull-right" role="button"><i className="glyphicon glyphicon-edit"></i></a> <a href="#" className="btn btn-info btn-xs" role="button">Add to Cart</a> <a href="#" className="btn btn-default btn-xs" role="button">Add to Favorite</a>

                </div>
                <div>
                    <CardFooter totalVoteCount={this.props.product.totalVote} />
                   
                </div>
                <div>
                    <CommentsButton />
                    </div>
                </div>
                </div> );
    }
}

export default ProductCard;