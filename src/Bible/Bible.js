import React, { Component } from "react";
import config from '../config'
import "./Bible.css";

export default class DashMain extends Component {
  state={
    passage: '',
  }
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
  handleBibleSearch = (eventId) => {

    let url = new URL(`${config.API_ENDPOINT}search/`);

    url.searchParams.set("q", eventId);
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
    fetch(url, options)
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
          eventId: this.changeHandler,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };
  render(){
    console.log(this.handleBibleSearch)
  return (
    <div className="main-body">
      <nav className="main-nav">
        <h2>Group Name</h2>
        <p>Profile</p>
      </nav>
      <form className="bible-search" onSubmit={this.handleBibleSearch}>
      <p>Search the Bible</p>
        <label>
          <input onChange={this.changeHandler}></input>
          <span role='img' aria-label='search' className='search'>🔍</span>
        </label>  
        <button type='submit'>Submit</button>      
      </form>
      <div className='select-passage'>
        <h3 className='select-passage-header'>Select Passage</h3>
        <div className='select-options'>
        <select>
          <option>Select Book</option>
          <option>Matthew</option>
          <option>Mark</option>
          <option>Luke</option>
          <option>John</option>
        </select>
        <select>
          <option>Select Chapter</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select>
          <option>Select Verse</option>
          <option>1</option>
          <option>10</option>
          <option>15</option>
        </select>
        </div>
      </div>
      <div className="row-one">
        <div className="box bible-box">
          <h3>Bible</h3>
          <p>{this.state.passage.passages}</p>
          <p>Passage</p>
        </div>
        {/* <div className='study-tools'>
        <div className="box study-box">
          <h3>Study Tools</h3>
          <p>highlight passage</p>
          <p>cross references</p>
          <p>tag someone, leave them note</p>
        </div>
        <div className="box notes-box">
          <h3>Notes</h3>
          <p>takes notes on a passage</p>
        </div>
        </div> */}
      </div>
      
    </div>
  );
}}
