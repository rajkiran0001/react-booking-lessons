import React from 'react'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar-scheduler/dist/scheduler.min.css'
import '../App.css'
const initialState = {
    name: "",
    email: "",
    course: "",
    message: "",
    date: "",
    nameError: "",
    emailError: "",
    courseError: "",
    messageError: "",
    dateError: "",
    success: "",
    visible: false
};

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    state = initialState;
    /* Here’s the juicy bit for posting the form submission */
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...this.state })
            })
                .then(() => this.setState({ success: "message sent", visible: true }))
                .catch(error => alert(error));
            // clear form
            this.setState(initialState);
        }
    };
    toggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    validate = () => {
        let nameError = "";
        let emailError = "";
        let dateError = "";
        let messageError = "";
        let courseError = "";

        // let passwordError = "";

        if (!this.state.name) {
            nameError = "name cannot be blank";
        }
        if (!this.state.email) {
            emailError = "email cannot be blank";
        }
        if (!this.state.date) {
            dateError = "date cannot be blank";
        }
        if (!this.state.course) {
            courseError = "course cannot be blank";
        }
        if (!this.state.message) {
            messageError = "name cannot be blank";
        }

        if (emailError || nameError || dateError || courseError || messageError) {
            this.setState({ emailError, nameError, dateError, courseError, messageError });
            return false;
        }
        return true;
    };


    render() {
        const { name, email, message, course, date } = this.state;
        console.log(name, email, message, course, date);
        // style={{ width: '100%', marginLeft: 70, float: 'left' }}

        return (
            <div>
                <div style={{ maxWidth: 500 }}>
                    <Form onSubmit={this.handleSubmit} style={{ width: '100%', marginLeft: 70, float: 'left' }}>
                        <br />
                        <FormGroup>
                            <Label for="exampleName">Name</Label>
                            <Input type="text" name="name" id="examplePassword" placeholder="Enter your name" value={this.state.name} onChange={this.handleChange} />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.nameError}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="course">Courses</Label>
                            <Input type="text" name="course" id="courses" placeholder="Number of courses booked" value={this.state.course} onChange={this.handleChange} />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.courseError}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="course">Date & time</Label>
                            <Input type="text" name="date" id="courses" placeholder="Enter your desired date and time" value={this.state.date} onChange={this.handleChange} />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.dateError}
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleMessage">Message</Label>
                            <Input type="textarea" name="message" id="exampleMessage" placeholder="Enter your text" value={this.state.message} onChange={this.handleChange} />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.messageError}
                            </div>
                        </FormGroup>
                        <Button>Submit</Button>
                        <br />
                        <Alert isOpen={this.state.visible} toggle={this.toggle.bind(this)}>{this.state.success}</Alert>
                    </Form>
                </div>
                <div style={{ float: 'right', marginRight: 100, marginTop: 100, color: "#006600", fontSize: 20 }} >
                    <p>Direct Contact:</p>
                    <p>Email: learngf@gmail.com</p>
                    <p >Phone & Whatsapp: +4915908185327</p>
                    <p >Skype ID: learn-german-freely</p>
                </div>
                <div style={{ clear: 'both', marginLeft: 70, marginRight: 70 }}>
                    <br />
                    <strong style={{ color: "red" }}>Booked Time Slots:</strong><br />
                    <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}
                        events={[
                            { title: 'reading', date: '2020-04-04T12:00:00' },
                            { title: 'reading', date: '2020-04-05T09:00:00' },
                            { title: 'speaking', date: '2020-04-05T17:00:00' }
                        ]}
                    />
                </div>
            </div>
        );
    }
}

export default Contact
