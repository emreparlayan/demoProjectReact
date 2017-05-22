import * as React from 'react';

interface SingleStarProps {
    star_type: string
}

class SingleStar extends React.Component<SingleStarProps, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return (<span>
            <i className={this.props.star_type} />
        </span>);
    }
}

export default SingleStar;