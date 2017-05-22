import * as React from 'react';

class CommentsButton extends React.Component<any, any>{
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <button className="btn btn-primary text-center">Comments</button>
        </div>);
    }
}

export default CommentsButton;