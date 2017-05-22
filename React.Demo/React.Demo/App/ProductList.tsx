import * as React from 'react';
import ProductCard from './ProductCard';


export class Product {
    name: string;
    caption: string;
    images: string[];
    thumbnailImage: string;
    summary: string;
    regularPrice: number;
    discountPrice: number;
    votes: any[];
    totalVoteCount: number;

    constructor() {

    } 
}
interface ProductListState {
    products: Product[];
}



class ProductList extends React.Component<any, ProductListState>{
    constructor(props) {
        super(props);
    }
   

    render() {
        return (<div className="col">

            <div className="row">
                {
                    this.state.products.map((value, index) => {
                        return (<ProductCard key={index} product={value} />);
                    })
                }
                </div>
        </div>);

    }
    printProducts() {
        this.state.products.map((value, index) => {
            return (<ProductCard key={index} product={value} />);
        });
    }
    setVotes() {
    }

    setProduct(data) {

        var productsTemp = [];

       data.map((value, index) => {
            let productTemp = new Product();
            productTemp.caption = value.name;
            productTemp.name = value.name;
            productTemp.images = value.images;
            productTemp.thumbnailImage = value.thumbnail_image;
            productTemp.regularPrice = value.regular_price;
            productTemp.discountPrice = value.discount_price;   
            productTemp.votes = value.votes;
            productTemp.totalVoteCount = value.totalVoteScore;
       
            productsTemp.push(productTemp);
        });

        this.setState({
            products: productsTemp
        });
    }
    componentWillMount() {
        this.setProduct(products.productsJson);
    }
}

var products =
    {
        "productsJson": [

            {
                "name": "Adidas ZX 5000",
                "thumbnail_image": "https://www.sneakerfreaker.com/wp-content/uploads/2014/10/Adidas-ZX-Flux-NPS-Core-Burgundy-2-640x426.jpg",
                "summary": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                "total_vote_score": 4.3,
                "votes": [
                    {
                        "user_id": 12,
                        "vote_score": 9
                    },
                    {
                        "user_id": 45,
                        "vote_score": 9
                    }
                ],
                "images": [
                    "https://feo.cdnrnd.com/ayakkabidunyasi/mnresize/300/300/Content/media/ProductImg/original/636277871474159648.jpg",
                    "https://mcdn01.gittigidiyor.net/27671/tn30/276711482_tn30_0.jpg"
                ],
                "regular_price": 219.90,
                "discount_price": 199.90,
                "comments_count": 12
            },
            {
                "name": "Diesel Perfume",
                "thumbnail_image": "https://www.perfume.com/images/products/parent/medium/62550M.jpg",
                "summary": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                "total_vote_score": 6.6,
                "votes": [
                    {
                        "user_id": 12,
                        "vote_score": 9
                    },
                    {
                        "user_id": 45,
                        "vote_score": 9
                    }
                ],
                "images": [
                    "https://feo.cdnrnd.com/ayakkabidunyasi/mnresize/300/300/Content/media/ProductImg/original/636277871474159648.jpg",
                    "https://mcdn01.gittigidiyor.net/27671/tn30/276711482_tn30_0.jpg"
                ],
                "regular_price": 99.90,
                "discount_price": 79.90,
                "comments_count": 12
            },
            {
                "name": "Raspberry PI Zero",
                "thumbnail_image": "https://www.raspberrypi.org/app/uploads/2016/02/Raspberry-Pi-Zero-web.jpg",
                "summary": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                "total_vote_score": 54,
                "votes": [
                    {
                        "user_id": 12,
                        "vote_score": 9
                    },
                    {
                        "user_id": 45,
                        "vote_score": 9
                    }
                ],
                "images": [
                    "https://feo.cdnrnd.com/ayakkabidunyasi/mnresize/300/300/Content/media/ProductImg/original/636277871474159648.jpg",
                    "https://mcdn01.gittigidiyor.net/27671/tn30/276711482_tn30_0.jpg"
                ],
                "regular_price": 19.90,
                "discount_price": 9.90,
                "comments_count": 12
            },
            {
                "name": "Iphone 17 plus",
                "thumbnail_image": "https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone7/apple-iphone-7-red-gallery-img-1.jpg",
                "summary": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                "total_vote_score": 7.8,
                "votes": [
                    {
                        "user_id": 12,
                        "vote_score": 9
                    },
                    {
                        "user_id": 45,
                        "vote_score": 9
                    }
                ],
                "images": [
                    "https://feo.cdnrnd.com/ayakkabidunyasi/mnresize/300/300/Content/media/ProductImg/original/636277871474159648.jpg",
                    "https://mcdn01.gittigidiyor.net/27671/tn30/276711482_tn30_0.jpg"
                ],
                "regular_price": 519.90,
                "discount_price": 519.90,
                "comments_count": 12
            },
            {
                "name": "Macbook Pro",
                "thumbnail_image": "http://www.laptopmag.com/images/uploads/4989/g/apple-macbook-pro-13-2016-nw-g02.jpg",
                "summary": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                "total_vote_score": 4.3,
                "votes": [
                    {
                        "user_id": 12,
                        "vote_score": 9
                    },
                    {
                        "user_id": 45,
                        "vote_score": 9
                    }
                ],
                "images": [
                    "https://feo.cdnrnd.com/ayakkabidunyasi/mnresize/300/300/Content/media/ProductImg/original/636277871474159648.jpg",
                    "https://mcdn01.gittigidiyor.net/27671/tn30/276711482_tn30_0.jpg"
                ],
                "regular_price": 1099.90,
                "discount_price": 999.90,
                "comments_count": 12
            }
        ]
    };

export default ProductList;