import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Blog extends Component {
  state = {
    blog: []
  }; 

  componentDidMount() {
    this.loadBlogs(); 
  }

  loadBlogs = () => {
    API.getArticle()
    .then(res => this.setState({ Blogs: res.data }))
    .catch(err => console.log(err)); 
  }; 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-6'>
            <Jumbotron>
              <h1>Blog List</h1>
            </Jumbotron>
            {this.state.blog.length ? (
              <List>
                {this.state.blog.map(article => (
                  <ListItem key={article._id}>
                    <a href={'/blog/' + article._id}>
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

export default Blog; 