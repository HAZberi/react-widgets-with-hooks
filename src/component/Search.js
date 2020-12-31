import React, { useState, useEffect } from "react";
import { AJAX } from "../helper.js";

const Search = () => {
  //State Definition/Initialization
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  //Updating State
  useEffect(() => {
    const search = async () => {
      let url = "https://en.wikipedia.org/w/api.php?origin=*";
      const params = {
        action: "query",
        list: "search",
        format: "json",
        srsearch: term,
      };
      Object.keys(params).forEach((key) => (url += `&${key}=${params[key]}`));
      const data = await AJAX(url);
      setResults(data.query.search);
    };
    //We will use a timer to limit the number of api calls
    const timerId = setTimeout(() => {
      //if there exists a search term otherwise set the results back to empty
      term ? search() : setResults([]);
    }, 500);
    //useEffect is allowed to return a function
    //Its a good place to create a reset and clear functionality
    return () => {
      clearInterval(timerId);
    };
  }, [term]);
  //Render search list
  const renderedListItems = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <a
            className="ui right floated"
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="ui primary button">GO</button>
          </a>
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  //Returns Search Component
  return (
    <div className="ui form">
      <div className="field">
        <label>Search</label>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="ui celled list">{renderedListItems}</div>
    </div>
  );
};

export default Search;
