import * as React from 'react';
import StarBuck from './StarBuck';
import ScoreBoard from './ScoreBoard';

interface CardFooterProps {
    totalVoteCount: number;
}

class CardFooter extends React.Component<CardFooterProps, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <StarBuck starCount={this.props.totalVoteCount}  />
            <ScoreBoard score_color="orange" />
        </div>);
    }
}

export default CardFooter;