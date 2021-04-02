import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FaSearch, FaArrowDown } from "react-icons/fa";
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

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            codeInput: "",
            descInput: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/search", {
                codeInputPost: this.state.codeInput,
                descInputPost: this.state.descInput,
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({
            codeInput: "",
            descInput: "",
        });
    };

    render() {
        const { codeInput, descInput } = this.state;
        return (
            <Container className="formcontainer">
                <h2>
                    Pay Less for Healthcare Services! Start Here <FaArrowDown />
                </h2>
                <Form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                name="codeInput"
                                id="codeInput"
                                placeholder="Search by insurance codes.  Ex: 1006455"
                                value={codeInput}
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />
                        </FormGroup>
                        <h2>Or...</h2>
                        <FormGroup>
                            <Input
                                type="text"
                                name="descInput"
                                id="descInput"
                                placeholder="Search by procedure description"
                                value={descInput}
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Button>
                        Search <FaSearch />
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default SearchForm;

if (document.getElementById("searchForm")) {
    ReactDOM.render(<SearchForm />, document.getElementById("searchForm"));
}
