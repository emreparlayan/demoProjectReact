import * as React from 'react';

interface ExampleState {
    objHolders: any[]
}

class JsonHolder {
    homeTeam: string;
    awayTeam: string;
    markerImage?: string;
    information?: string;
    capacity?: number;
    previousScore?: string;
    tv?: string
}

class Example extends React.Component<any, ExampleState>{
    constructor(props) {
        super(props);
        this.state = { objHolders:[] };
    }
    componentWillMount() {
        this.stateS(xyz.markers);  
    }

    stateS(obj) {
        
        
        var objs =[];
        obj.map((item, index) => {

            let objHolder = new JsonHolder();
            objHolder.homeTeam = item.homeTeam;
            objHolder.awayTeam = item.awayTeam;
            objHolder.previousScore = item.previousScore;
            objs.push( objHolder);

        });
       // objHolder.capacity = xyz.markers.map((value)=>{})
        

        this.setState({ objHolders: objs });
        
    }

    render() {
        return (<div>
            {this.state.objHolders.map((value, index) => {
                let prPreviousScore;
                if (!value.previousScore) {
                     prPreviousScore = "Veri Yok";
                } else {
                    prPreviousScore = value.previousScore;
                }
                return <div key={index}> {value.homeTeam} - {value.awayTeam}  / {prPreviousScore} </div>
            })}
        </div>);
    }
}
var xyz = {
    "markers": [
        {
            "homeTeam": "Lawrence Library",
            "awayTeam": "LUGip",
            "markerImage": "images/red.png",
            "information": "Linux users group meets second Wednesday of each month.",
            "fixture": "Wednesday 7pm",
            "capacity": "",
            "tv": "",
            "previousScore": "4-1"
        },
        {
            "homeTeam": "Hamilton Library",
            "awayTeam": "LUGip HW SIG",
            "markerImage": "images/white.png",
            "information": "Linux users can meet the first Tuesday of the month to work out harward and configurati issues.",
            "fixture": "Tuesday 7pm",
            "capacity": "",
            "tv": "",
            "previousScore": ""
        },
        {
            "homeTeam": "Applebees",
            "awayTeam": "After LUPip Mtg Spot",
            "markerImage": "images/newcastle.png",
            "information": "Some of us go there after the main LUGip meeting, drink brews, and talk.",
            "fixture": "Wednesday whenever",
            "capacity": "2 to 4 pints",
            "tv": "",
            "previousScore": ""
        },
    ]
}

export default Example;