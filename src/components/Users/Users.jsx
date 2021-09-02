import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/action/usersActions";

import CardList from '../../components/CardList/CardList.jsx'
import "./Users.scss";
import Header from '../Header/Header.jsx'

class users extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;

    return (
      <>
        <Header/>
        <div className="container-search">
          <CardList items={users}/>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(users);