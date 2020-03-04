import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Blogs extends Component {
  state = {
    blogs: []
  }; 

  componentDidMount() {
    this.loadBlogs(); 
  }

  loadBlogs = () => {
    API.getArticles()
    .then(res => this.setState({ Blogs: res.data }))
    .catch(err => console.log(err)); 
  }; 


  // split the main site of the blog 
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-6'>
            <Jumbotron>
              <h1>Nav Blog List</h1>
            </Jumbotron>
            <form>
              <Input name='title' placeholder='Title' />
              <Input name='author' placeholder='Author' />
              <TextArea name='post' placeholder='Post' />
              <FormBtn>Submit Post</FormBtn>
            </form>
            </Col>
            <Col size='md-6 sm-12'>
              <Jumbotron>
                <h1>Recent Blog Post</h1>
              </Jumbotron>
              {this.state.blogs.length ? (
                <List>
                  {this.state.blogs.map(article => (
                    <ListItem key={article._id}>
                      <a href={'/Blogs/' + article._id}>
                        <strong>
                          {article.title} by {article.author}
                        </strong>
                      </a>
                      <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    ); 
  }
}

export default Blogs; 