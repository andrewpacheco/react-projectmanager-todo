import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  
  render() {
    console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.title} : {this.props.project.category}</strong> <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
