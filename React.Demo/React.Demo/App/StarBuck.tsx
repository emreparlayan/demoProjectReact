import * as React from 'react';
import SingleStar from './SingleStar';

interface StarBuckProps {
    starCount: number;

}

class StarBuck extends React.Component<StarBuckProps, any>{
    constructor(props) {
        super(props);
    }
 
    render() {
        return (<span>
            {
                this.printStars(this.props.starCount)
                
            }
        </span>);
    }
    calcStar() {
        let calcCount = this.props.starCount
    }
    printStars(countN) {
        let elements = [];
        let starCountCl = (Math.round(this.props.starCount));


        
        for (let i = 0; i < starCountCl; i++) {
            elements.push(<SingleStar star_type="fa fa-star" />);
        }

        if (starCountCl < 10) {
            let cval = 10 - starCountCl;
            for (let i = 0; i < cval; i++) {
                elements.push(<SingleStar star_type="fa fa-star-o" />);
            }
        }

        return elements;

    }


    
}

export default StarBuck;