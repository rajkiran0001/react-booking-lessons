import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: ""};
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, course, date } = this.state;
    return (
          <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input type="text" name="name" id="examplePassword" placeholder="Enter your name" value={name} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" value={email} onChange={this.handleChange} />
          </FormGroup>
          {/* <FormGroup>
            <Label for="course">courses</Label>
            <Input type="text" name="course" id="courses" placeholder="Number of courses booked" value={course} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
          <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder" value={date} onChange={this.handleChange}
        />
          </FormGroup> */}
          <FormGroup>
            <Label for="exampleMessage">Message</Label>
            <Input type="textarea" name="message" id="exampleMessage" placeholder="Enter your text" value={message} onChange={this.handleChange} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
    );
  }
}

export default ContactForm
