import React, { Component } from "react";
import config from "../config";
import "./Needed.css";

export default class Needed extends Component {
  state = {
    selectedItems: [],
  };
  //went back to mount now that I'm returning the event_id
  componentDidMount() {
    let userIds = this.props.needed;

    userIds.forEach((item, index) => {
      if (item.user_id) {
        let eachUser = this.props.users.find((user) => {
          return user.id === item.user_id;
        });
        userIds[
          index
        ].userName = `${eachUser.first_name} ${eachUser.last_name}`;
      }
    });
    this.setState({
      checkedItems: userIds,
    });
  }
  handleSelectedItems = (e) => {
    if (this.state.selectedItems.includes(e.target.name)) {
      let filteredItems = this.state.selectedItems.filter(
        (item) => item !== e.target.name
      );
      this.setState({
        selectedItems: filteredItems,
      });
    } else {
      let items = this.state.selectedItems;
      items.push(e.target.name);
      this.setState({
        selectedItems: items,
      });
    }
  };
  handleConfirm = () => {
    let items = [];
    this.state.selectedItems.forEach((item) => {
      this.props.needed.forEach((n) => {
        if (item == n.id) {
          items.push(n);
        }
      });
    });
    fetch(`${config.HOST}/api/needed/update-item`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify({ id: this.props.userId, items }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //display items needed for event
  render() {
    let sortedItems = { checked: [], unchecked: [] };
    this.state.checkedItems &&
      this.state.checkedItems.forEach((item) => {
        if (!item.user_id) {
          sortedItems.unchecked.push(item);
        } else {
          sortedItems.checked.push(item);
        }
      });
    let items = [...sortedItems.unchecked, ...sortedItems.checked];
    return (
      <div className="Needed">
        <div className="Item">
          <p>Items to bring to group</p>

          {items &&
            items.map((item, i) => {
              return (
                <div key={i}>
                  <input
                    type="checkbox"
                    id={item.item_name}
                    name={item.id}
                    className="visually-hidden"
                    value={item.id}
                    checked={
                      item.userName ||
                      this.state.selectedItems.includes(item.id.toString())
                        ? true
                        : false
                    }
                    onChange={!item.userName ? this.handleSelectedItems : null}
                  />
                  <label htmlFor={item.item_name}>
                    <span>{item.item_name}</span>
                    {item.userName ? item.userName : ""}
                  </label>
                </div>
              );
            })}
          <p>Please don't forget your items!</p>
          {this.state.selectedItems.length > 0 ? (
            <button
              type="submit"
              className="confirm"
              onClick={this.handleConfirm}
            >
              Confirm
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
