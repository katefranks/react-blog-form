import { Component } from 'react';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.addBlog({
      title: this.state.title,
      body: this.state.body,
    });

    this.setState({ title: '', body: '' });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Enter Blog Title" value={this.state.title} onChange={this.handleInput}  />
        <br/>
        <input type="text" name="body" placeholder="Write Content Here" value={this.state.body} onChange={this.handleInput}  />
        <br/>
        <button type="submit">Add Blog</button>
      </form>
    )
  }
}

export default BlogForm;
