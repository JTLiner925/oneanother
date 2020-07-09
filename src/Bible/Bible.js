import React, { Component } from "react";
import config from "../config";
import store from "../Store";
import ApiContext from "../ApiContext";
import "./Bible.css";

export default class DashMain extends Component {
  state = {
    passage: "",
    search: "",
    address: "",
  };
  static contextType = ApiContext;

  setPassage = (passage, type) => {
    if (type === "chapter") {
      this.setState({
        passage,

        error: null,
      });
    }
    if (type === "search") {
      this.setState({
        passage,

        error: null,
      });
    }
  };
  navHandler = () => {
    this.props.onHandleHam(this.state);
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
    url.searchParams.set("include-passage-reference", false);
    url.searchParams.set("include-verse-number", true);
    url.searchParams.set("include-first-verse-number", false);
    url.searchParams.set("include-footnotes", true);
    url.searchParams.set("include-footnote-body", false);
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
       
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((passage) => {
        this.setState({
          passage: "",
          address: "chapter",
          search: "",
        });
        this.setPassage(passage, "chapter");
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  handleBibleSearch = (e) => {
    e.preventDefault();
    e.persist();
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
    
    const options = {
      method: "GET",

      headers: {
        Authorization: `Token ${config.API_KEY}`,
      },
    };
    fetch(url.href, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((passage) => {
        this.setState({
          passage: "",
          address: "search",
          book: "",
          chapter: "",
        });
        this.setPassage(passage, "search");
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };
  render() {
    let books = {
      Genesis: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
        ],
      },
      Exodus: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
        ],
      },
      Leviticus: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
        ],
      },
      Numbers: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
        ],
      },
      Deuteronomy: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
        ],
      },
      Joshua: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
        ],
      },
      Judges: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
        ],
      },
      Ruth: {
        Chapters: [1, 2, 3, 4],
      },
      "1 Samuel": {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
        ],
      },
      "2 Samuel": {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
        ],
      },
      "1 Kings": {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
        ],
      },
      "2 Kings": {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
        ],
      },
      "1 Chronicles": {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
        ],
      },
      "2 Chronicles": {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
        ],
      },
      Ezra: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      Nehemiah: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      },
      Esther: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      Job: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
        ],
      },
      Psalms: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63,
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          88,
          89,
          90,
          91,
          92,
          93,
          94,
          95,
          96,
          97,
          98,
          99,
          100,
          101,
          102,
          103,
          104,
          105,
          106,
          107,
          108,
          109,
          110,
          111,
          112,
          113,
          114,
          115,
          116,
          117,
          118,
          119,
          120,
          121,
          122,
          123,
          124,
          125,
          126,
          127,
          128,
          129,
          130,
          131,
          132,
          133,
          134,
          135,
          136,
          137,
          138,
          139,
          140,
          141,
          142,
          143,
          144,
          145,
          146,
          147,
          148,
          149,
          150,
        ],
      },
      Proverbs: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
        ],
      },
      Ecclesiastes: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      "Song of Songs": {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      Isaiah: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55,
          56,
          57,
          58,
          59,
          60,
          61,
          62,
          63,
          64,
          65,
          66,
        ],
      },
      Jeremiah: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
        ],
      },
      Lamentations: {
        Chapters: [1, 2, 3, 4, 5],
      },
      Ezekiel: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
          47,
          48,
        ],
      },
      Daniel: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      Hosea: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      Joel: {
        Chapters: [1, 2, 3],
      },
      Amos: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      Obadiah: {
        Chapters: [1],
      },
      Jonah: {
        Chapters: [1, 2, 3, 4],
      },
      Micah: {
        Chapters: [1, 2, 3, 4, 5, 6, 7],
      },
      Nahum: {
        Chapters: [1, 2, 3],
      },
      Habakkuk: {
        Chapters: [1, 2, 3],
      },
      Zephaniah: {
        Chapters: [1, 2, 3],
      },
      Haggai: {
        Chapters: [1, 2],
      },
      Zechariah: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      Malachi: {
        Chapters: [1, 2, 3, 4],
      },
      Matthew: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
        ],
      },
      Mark: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      },
      Luke: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
        ],
      },
      John: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
        ],
      },
      Acts: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
        ],
      },
      Romans: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      },
      "1 Corinthians": {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      },
      "2 Corinthians": {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      },
      Galatians: {
        Chapters: [1, 2, 3, 4, 5, 6],
      },
      Ephesians: {
        Chapters: [1, 2, 3, 4, 5, 6],
      },
      Philippians: {
        Chapters: [1, 2, 3, 4],
      },
      Colossians: {
        Chapters: [1, 2, 3, 4],
      },
      "1 Thessalonians": {
        Chapters: [1, 2, 3, 4, 5],
      },
      "2 Thessalonians": {
        Chapters: [1, 2, 3],
      },
      "1 Timothy": {
        Chapters: [1, 2, 3, 4, 5, 6],
      },
      "2 Timothy": {
        Chapters: [1, 2, 3, 4],
      },
      Titus: {
        Chapters: [1, 2, 3],
      },
      Philemon: {
        Chapters: [1],
      },
      Hebrews: {
        Chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      },
      James: {
        Chapters: [1, 2, 3, 4, 5],
      },
      "1 Peter": {
        Chapters: [1, 2, 3, 4, 5],
      },
      "2 Peter": {
        Chapters: [1, 2, 3],
      },
      "1 John": {
        Chapters: [1, 2, 3, 4, 5],
      },
      "2 John": {
        Chapters: [1],
      },
      "3 John": {
        Chapters: [1],
      },
      Jude: {
        Chapters: [1],
      },
      Revelation: {
        Chapters: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
        ],
      },
    };
    return (
      <div className="bible-body" onClick={this.navHandler}>
        <div className="bible-search-params">
          <form className="bible-search" onSubmit={this.handleBibleSearch}>
            <h3>Search the Bible</h3>
            <label>
              <input
                value={this.state.search}
                name="search"
                className="search"
                onChange={this.changeHandler}
                placeholder="Search for keywords i.e. 'abide'  'love'  'Jesus' "
              ></input>
            </label>
            <button  className='bible-submit' type="submit">Submit</button>
          </form>
          <form className="select-passage" onSubmit={this.handleBibleReference}>
            <h3 className="select-passage-header">Select Passage</h3>
            <div className="select-options">
              <select
                className="bible-select"
                value={this.state.book}
                name="book"
                onChange={this.changeHandler}
              >
                <option>Select Book</option>
                {Object.keys(books).map((book) => {
                  return <option key={book}>{book}</option>;
                })}
              </select>
              <select
                className="bible-select"
                value={this.state.chapter}
                name="chapter"
                onChange={this.changeHandler}
              >
                <option>Select Chapter</option>
                {this.state.book &&
                  books[this.state.book].Chapters.map((chapter) => {
                    return <option key={chapter}>{chapter}</option>;
                  })}
              </select>

              <button className='bible-submit' type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="row-one">
          <div className="box bible-box">
            {this.state.address === "chapter"
              ? this.state.passage &&
                this.state.passage.passages.map((pa, i) => {
                  return (
                    <div key={i} className="box-bible bible-texts">
                      <h3>Bible Passage</h3>
                      <p className="bible-passage">{pa}</p>
                    </div>
                  );
                })
              : this.state.address === "search"
              ? this.state.passage &&
                this.state.passage.results.map((result, i) => {
                  return (
                    <div key={i} className="box-bible bible-texts">
                      <p>{result.reference}</p>
                      <p>{result.content}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}
