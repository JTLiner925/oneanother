import React from "react";
import "./Bible.css";

export default function DashMain() {
  return (
    <div className="main-body">
      <nav className="main-nav">
        <h2>Group Name</h2>
        <p>Profile</p>
      </nav>
      <div className="bible-search">
      <p>Search the Bible</p>
        <label>
          <input></input>
          <span role='img' aria-label='search' className='search'>🔍</span>
        </label>        
      </div>
      <div className='select-passage'>
        <h3 className='select-passage-header'>Select Passage</h3>
        <div className='select-options'>
        <select>
          <option>Select Version</option>
          <option>HCSB</option>
          <option>ESV</option>
          <option>NLT</option>
        </select>
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
          <p>Scripture Reference</p>
          <p>Passage</p>
        </div>
        <div className='study-tools'>
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
        </div>
      </div>
      
    </div>
  );
}
