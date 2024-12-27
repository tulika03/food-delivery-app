import "./user.css";
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.user.name, "child class constructor")
  }

  render() {
    console.log(this.props.user.name, "child class render")
    return (
      <div className="user-list">
        <div className="user-card">
          <div className="card-content">
            <img src={this.props?.user?.avatar_url}></img>
          </div>
          <div className="card-content">
            <div className="label">
              <span>Name </span>
              <span>Location </span>
              <span>Contact </span>
              <span>Count </span>
            </div>
            <div className="info">
              <span> {this.props?.user?.name}</span>
              <span> {this.props?.user?.location}</span>
              <span> {this.props?.user?.login}</span>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => {
                    this.setState({ count: this.state.count - 1 });
                  }}
                >
                  -
                </button>
                <span> {this.state?.count} </span>
                <button
                  onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.user.name, "child class componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.user.name, "child class componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.user.name, "child class componentWillUnmount");
  }
}

export default UserClass;
