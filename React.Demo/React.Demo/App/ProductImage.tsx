import * as React from 'react';



interface ProductImageProps {
    image_url: string;
}

class ProductImage extends React.Component<ProductImageProps, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <img className="img-responsive" src={this.props.image_url} />
        </div>);
    }
}

export default ProductImage;