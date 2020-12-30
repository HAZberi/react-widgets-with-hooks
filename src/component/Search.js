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
    //if there exists a search term otherwise set the results back to empty
    term ? search() : setResults([]);
  }, [term]);
  //Render search list
  const renderedListItems = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
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
