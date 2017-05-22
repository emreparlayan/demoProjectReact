import * as React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import PageContent from './PageContent';
import ProductCard from './ProductCard';
import ProductList from './ProductList';
import Example from './Example';


class MainPage extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div >
            <div className="row">
                <div className="col-md-12">
                    <Navigation />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                   <ProductList  />
                </div>
            </div>
        </div>);
    }
}


export default MainPage;