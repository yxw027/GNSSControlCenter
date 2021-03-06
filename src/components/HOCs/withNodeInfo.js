import React from 'react';
import {withRouter} from 'react-router-dom';

import {firebase} from '../../firebase/index';

const withNodeInfo = (Component) => {
    class WithNodeInfo extends React.Component {
        constructor(props) {
            super(props);
            this.nodeList = {}
            this.state = {
                nodeList: {}
            };
        }
        componentDidMount() {
            firebase.db.ref('/state/nodes').on('child_added', (snapshot) => {
                this.nodeList[snapshot.key] = snapshot.val();
                this.setState({ nodeList: this.nodeList });
            });
            firebase.db.ref('/state/nodes').on('child_removed', (snapshot) => {
                if (!snapshot) { return; }
                delete this.nodeList[snapshot.key];
                this.setState({ nodeList: this.nodeList });
            });
    
            firebase.db.ref('/state/nodes').on('child_changed', (snapshot) => {
                this.nodeList[snapshot.key] = snapshot.val();
                this.setState({ nodeList: this.nodeList });
            });
        }
        componentWillUnmount() {
            firebase.db.ref('/state/nodes').off();
        }
        render() {
            return <Component nodeList={this.state.nodeList} {...this.props} />;
        }
    }

   
    return withRouter(WithNodeInfo);
}

export default withNodeInfo;