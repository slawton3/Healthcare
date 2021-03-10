import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FaSearch } from "react-icons/fa";
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
        console.log(value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const code = this.state.codeInput;
        const desc = this.state.descInput;

        console.log(code);
        console.log(desc);

        this.setState({
            codeInput: "",
            descInput: "",
        });
    };

    render() {
        const { codeInput, descInput } = this.state;
        return (
            <Container className="formcontainer">
                <h2>Search Tool</h2>
                <Form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Search by Codes</Label>
                            <Input
                                type="text"
                                name="codeInput"
                                id="codeInput"
                                value={codeInput}
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Search by Diagnosis/Description</Label>
                            <Input
                                type="text"
                                name="descInput"
                                id="descInput"
                                value={descInput}
                                onChange={(e) => {
                                    this.handleChange(e);
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Button>
                        Submit <FaSearch />
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
