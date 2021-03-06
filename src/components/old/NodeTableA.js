import React, { Component } from 'react';
import { Table, Label, ProgressBar } from 'react-bootstrap';

class NodeTableA extends Component {
    render() {
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Node</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Owner</th>
                        <th>Exp.</th>
                        <th>Uptime</th>
                        <th>Errors</th>
                        <th>Free Space</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(this.props.nodeList).map((nodeName, index) => (
                            <tr>
                                <td>
                                    {nodeName}
                                </td>
                                <td>
                                    {
                                        this.props.nodeList[nodeName].status === 'offline' ?
                                            (<Label bsStyle="danger">{this.props.nodeList[nodeName].status}</Label>)
                                            : (<Label bsStyle="success">{this.props.nodeList[nodeName].status}</Label>)
                                    }
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                    {
                                        this.props.nodeList[nodeName].errcnt !== 0 ?
                                            (<Label bsStyle="danger">{this.props.nodeList[nodeName].errcnt}</Label>)
                                            : (<Label bsStyle="success">{this.props.nodeList[nodeName].errcnt}</Label>)
                                    }
                                </td>
                                <td>
                                    <ProgressBar now={60} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        );
    }
}

export default NodeTableA;