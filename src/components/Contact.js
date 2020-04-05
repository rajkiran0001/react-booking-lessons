import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar-scheduler/dist/scheduler.min.css'
import '../App.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "", course: "", date: "" };
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
        console.log(name, email, message, course, date);

        return (
            <div>
                <div style={{ maxWidth: 500 }}>
                    <Form onSubmit={this.handleSubmit} style={{ width: '100%', marginLeft: 70, float: 'left' }}>
                        <br />
                        <b style={{ color: "#2a2a72" }}>Registration Form:</b>
                        <FormGroup>
                            <Label for="exampleName">Name</Label>
                            <Input type="text" name="name" id="examplePassword" placeholder="Enter your name" value={name} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" value={email} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="course">Courses</Label>
                            <Input type="text" name="course" id="courses" placeholder="Number of courses booked" value={course} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="course">Date & time</Label>
                            <Input type="text" name="date" id="courses" placeholder="Enter your desired date and time" value={date} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleMessage">Message</Label>
                            <Input type="textarea" name="message" id="exampleMessage" placeholder="Enter your text" value={message} onChange={this.handleChange} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
                <div style={{ float: 'right', marginRight: 100, marginTop: 100, color: "#2a2a72" }} >
                    <p>Direct Contact:</p>
                    <p>Email: learngf@gmail.com</p>
                    <p >Phone & Whatsapp: +4915908185327</p>
                    <p >Skype ID: learn-german-freely</p>
                </div>
                <div style={{ clear: 'both', marginLeft: 70, marginRight: 70 }}>
                    <br />
                    <strong style={{ color: "red" }}>Booked Time Slots:</strong><br />
                    <b style={{ color: "red" }}>our courses are available on fridays, saturdays and sundays</b>
                    <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]}
                        events={[
                            { title: 'reading', date: '2020-04-04T16:00:00' },
                            { title: 'speaking', date: '2020-04-05T10:00:00' }
                        ]}
                    />
                </div>
            </div>
        );
    }
}

export default Contact
