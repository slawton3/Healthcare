import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    FormText,
    FormFeedback,
} from "reactstrap";
import "./App.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",

            validate: {
                emailState: "",
            },
        };
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;
        if (emailRex.test(e.target.value)) {
            validate.emailState = "has-success";
        } else {
            validate.emailState = "has-danger";
        }
        this.setState({ validate });
    }

    handleChange = async (event) => {
        const { target } = event;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    };

    submitForm(e) {
        e.preventDefault();

        axios
            .post("/login", {
                email: this.state.email,
                password: this.state.password,
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({
            email: "",
            password: "",
        });
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container className="formcontainer">
                <h2>Login</h2>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Email Address</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                value={email}
                                valid={
                                    this.state.validate.emailState ===
                                    "has-success"
                                }
                                invalid={
                                    this.state.validate.emailState ===
                                    "has-danger"
                                }
                                onChange={(e) => {
                                    this.validateEmail(e);
                                    this.handleChange(e);
                                }}
                            />
                            <FormFeedback valid>
                                Valid email entered.
                            </FormFeedback>
                            <FormFeedback>
                                Uh oh! Looks like there is an issue with your
                                email. Please input a correct email.
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={password}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Login;

if (document.getElementById("userLogin")) {
    ReactDOM.render(<Login />, document.getElementById("userLogin"));
}
