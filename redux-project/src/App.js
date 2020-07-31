import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ACTION_TYPES from "./Action/action_types"
import * as ACTIONS from "./Action/action"
import { connect } from "react-redux"

class App extends Component {

    render(){
        return(
            <div>
                Projects List
                {this.props.projects.map(project => (
                    <div key={project.id}>
                        {project.name}
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        projects: state.projects.projects
    }
}

// const mapDispatchToProps = () => {

// }

export default connect(mapStateToProps)(App);
