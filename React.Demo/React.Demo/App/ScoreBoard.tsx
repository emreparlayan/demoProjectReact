import * as React from 'react';

interface ScoreBoardProps {
    score_color: string
}

class ScoreBoard extends React.Component<ScoreBoardProps, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return (<span className='pull-right'>
            <span className={this.props.score_color}>58</span> / <span className="green">100</span>
        </span>);
    }
}

export default ScoreBoard;