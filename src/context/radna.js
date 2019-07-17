import React from "react";

export default class Podaci extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pod: []
    };
  }
  componentDidMount() {
    fetch("./posts.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("parsed json", json);
        alert([json.name, json.id, json.email]);
        this.setState({ pod: json });
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  }
  render() {
    console.log(this.state.pod, "pod");

    const { pod } = this.state;
    let podaci = pod.map(podatak => {
      return (
        <div key={podatak.id}>
          <h3>User ID is : {podatak.id}</h3>
          <h3>Name is : {podatak.name}</h3>
          <h3>Email is : {podatak.email}</h3>
          <h3>Title is : {podatak.title}</h3>
          <h3>Message is : {podatak.body}</h3>
        </div>
      );
    });

    return (
      <div style={{ color: "blue" }}>
        <div style={{ color: "green" }}>
          <h1>Podaci iz faila</h1>{" "}
        </div>
        {podaci}
      </div>
    );
  }
}
