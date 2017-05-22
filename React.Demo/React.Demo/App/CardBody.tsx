import * as React from 'react';

class CardBody extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return ( <div className="caption">
                <h4>Thumbnail label</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                <a href="#" className="btn btn-default btn-xs pull-right" role="button"><i className="glyphicon glyphicon-edit"></i></a> <a href="#" className="btn btn-info btn-xs" role="button">Button</a> <a href="#" className="btn btn-default btn-xs" role="button">Button</a>
            </div>
            );
    }
}
export default CardBody;