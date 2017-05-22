import * as React from 'react';
import * as moment from 'moment';

interface ColumnProps {
    caption: string,
    key: string
}
interface PageContentStates {
    columns: ColumnProps[],
    data: any[],
    sort: string
}

class PageContent extends React.Component<any, PageContentStates>{
    constructor(props) {
        super(props);
        this.state = { columns: [], data: [], sort: 'asc' };
    }
    componentDidMount() {
        this.createRows();
    }
    createRows() {
        let colmns = [
            { caption: "Id", key: "Id" },
            { caption: "Name", key: "Name" },
            { caption: "Date", key: "Date" }
        ];
        let rows = [];
        for (var i = 0; i < 20; i++) {
            rows.push({ Id: i, Name: "Name-" + i, Date: moment().add(i, 'days').format("DD.MM.YYYY") });
        }

        this.setState({ columns: colmns, data: rows });
    }
    handleDataSort(column) {
        let data = this.state.data;
        let sort = this.state.sort;

        if (sort == "asc")
            sort = "desc";
        else
            sort = "asc";

        data = data.sort((a, b) => {
            if (sort == "asc") {
                if (a[column.key] < b[column.key]) {
                    return -1;
                }
                if (a[column.key] > b[column.key]) {
                    return 1;
                }
            } else {
                if (a[column.key] < b[column.key]) {
                    return 1;
                }
                if (a[column.key] > b[column.key]) {
                    return -1;
                }
            }
            return 0;
        });
        this.setState({ data: data, sort: sort });
    }
    render() {
        return (<div >
            <table className="table">
                <thead>
                    <tr>
                        {
                            this.state.columns.map((column, index) => {
                                return <th onClick={this.handleDataSort.bind(this, column)} key={index}>{column.caption}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((row, index) => {
                            return <tr key={index}>
                                {
                                    this.state.columns.map((column, cindex) => {
                                        return <td key={cindex}>{row[column.key]}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>);
    }
}

export default PageContent;