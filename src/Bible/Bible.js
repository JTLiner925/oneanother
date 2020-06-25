import React, { Component } from "react";
import config from "../config";
import store from "../Store";
import "./Bible.css";

export default class DashMain extends Component {
  state = {
    passage: "",
  };
  setPassage = (passage) => {
    this.setState({
      passage,
      error: null,
    });
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleBibleReference = (e) => {
    e.preventDefault();
    e.persist();
    let url = new URL(`https://api.esv.org/v3/passage/text/`);

    url.searchParams.set("q", this.state.book + this.state.chapter);
    url.searchParams.set("include-passage-reference", true);
    url.searchParams.set("include-verse-number", true);
    url.searchParams.set("include-first-verse-number", true);
    url.searchParams.set("include-footnotes", true);
    url.searchParams.set("include-footnote-body", true);
    url.searchParams.set("include-heading", true);
    url.searchParams.set("include-short-copyright", true);
    url.searchParams.set("indent-using", "tab");
    const options = {
      method: "GET",

      headers: {
        Authorization: `Token ${config.API_KEY}`,
      },
    };
    fetch(url.href, options)
      .then((res) => {
        // console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((passage) => {
        this.setPassage(passage);
        this.setState({
          [e.target.name]: e.target.value,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  handleBibleSearch = (e) => {
    e.preventDefault();
    e.persist();
    console.log("hello");
    let url = new URL(`https://api.esv.org/v3/passage/search/`);

    url.searchParams.set("q", this.state.search);
    url.searchParams.set("include-passage-reference", true);
    url.searchParams.set("include-verse-number", true);
    url.searchParams.set("include-first-verse-number", true);
    url.searchParams.set("include-footnotes", true);
    url.searchParams.set("include-footnote-body", true);
    url.searchParams.set("include-heading", true);
    url.searchParams.set("include-short-copyright", true);
    url.searchParams.set("indent-using", "tab");
    console.log(url);
    const options = {
      method: "GET",

      headers: {
        Authorization: `Token ${config.API_KEY}`,
      },
    };
    console.log(config.API_KEY);
    fetch(url.href, options)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((passage) => {
        this.setPassage(passage);
        this.setState({
          passage: passage,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };
  render() {
    console.log(this.state);
    return (
      <div className="main-body">
        <form className="bible-search" onSubmit={this.handleBibleSearch}>
          <p>Search the Bible</p>
          <label>
            <input name="search" onChange={this.changeHandler}></input>
            <span role="img" aria-label="search" className="search">
              🔍
            </span>
          </label>
          <button type="submit">Submit</button>
        </form>
        <form className="select-passage" onSubmit={this.handleBibleReference}>
          <h3 className="select-passage-header">Select Passage</h3>
          <div className="select-options">
            <select name="book" onChange={this.changeHandler}>
              <option>Select Book</option>
              <option>Matthew</option>
            </select>
            <select name="chapter" onChange={this.changeHandler}>
              <option>Select Chapter</option>
              <option>1</option>
            </select>

            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="row-one">
          <div className="box bible-box">
            <h3>Bible</h3>
            {this.state.passage
              ? this.state.passage &&
                this.state.passage.passages.map((pa, i) => {
                  return (
                    <div key={i}>
                      <p>{pa}</p>
                    </div>
                  );
                })
              : this.state.passage &&
                this.state.passage.results.map((result, i) => {
                  return (
                    <div key={i}>
                      <p>{result.reference}</p>
                      <p>{result.content}</p>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    );
  }
}
