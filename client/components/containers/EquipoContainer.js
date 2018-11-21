import React, { Component } from "react";
import { graphql } from "react-apollo";
import EquipoForm from "../presentational/EquipoForm";
import loginMutation from "../../mutations/Login";
import currentUserQuery from "../../queries/CurrentUser";

class EquipoContainer extends Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };
  }

  onSubmit(parameters) {
    this.props
      .mutate({
        variables: { parameters }
      })
      .catch(err => {
        const errors = err.graphQLErrors.map(err => err.message);
        this.setState({ errors });
      });
  }
  render(props) {
    return (
      <div className="container">
        <h3>Equipo</h3>
        <EquipoForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(currentUserQuery)(
  graphql(loginMutation)(EquipoContainer)
);
