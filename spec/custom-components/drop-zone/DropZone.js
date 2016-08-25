import React, {PropTypes, Component} from 'react';

class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragActive: false
    };
  }
  onDragLeave(e) {
    this.setState({
      isDragActive: false
    });
  }

  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';

    this.setState({
      isDragActive: true
    });
  }
  render() {
    var className = 'dropzone';
    if (this.state.isDragActive) {
      className += ' active';
    }

    var containerStyle = {
      width: '100%',
      padding: '3rem 0',
      boxSizing: 'border-box',
      borderWidth: '2px',
      borderColor : this.state.isDragActive ? '#000' : 'transparent',
      borderStyle: this.state.isDragActive ? 'solid' : 'dashed',
      background : this.state.isDragActive ? '#ddd' : 'transparent' ,
    };
    return (
      <div style={containerStyle}
           className={className}
           onDragLeave={this.onDragLeave.bind(this)}
           onDragOver={this.onDragOver.bind(this)}
           onDrop={(e)=>{
             this.setState({
               isDragActive : false
             },this.props.handlerOnChange(e))
           }}>
        {this.props.children}
      </div>
    )
  }
}

DropZone.propTypes = {
  handlerOnChange : PropTypes.func.isRequired,
  children : PropTypes.any,
  className : PropTypes.string
};

export default DropZone;
