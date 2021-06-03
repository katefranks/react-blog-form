import { Component} from 'react';
import './App.css';
import BlogForm from './BlogForm';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      blogs: [],
      counter: 2,
    }
    this.addBlog = this.addBlog.bind(this);
  }
  componentDidMount(){
    const blogs = [
    {
      id: 1,
      title: 'I Love Bikes',
      body: 'In this blog post, I will tell you about my love for all things bike related!',
    }
  ];
  this.setState({ blogs });
  }
  addBlog( blog ){
    blog.id = this.state.counter;
    const blogs = [ ...this.state.blogs ];
    blogs.push(blog);
    this.setState((state) => ({ blogs, counter: state.counter + 1 }));
  }
  render(){
    return (
      <div>
        <h1>Blog Form</h1>
        <BlogForm addBlog={this.addBlog} />
        {/* <BlogList blogs={this.state.blogs}
        /> */}
      </div>
    );
  }
}

export default App;
