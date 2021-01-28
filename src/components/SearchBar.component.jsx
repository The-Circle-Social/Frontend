import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";

const Searchbox = styled.input`
  max-width: 50rem;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1.3rem;
  border: 2px solid #15171c;
  color: #15171c;
  transition: all 0.3s ease-in;
  &:focus {
    outline: none;
    border: 2px solid #fff;
    color: #fff;
    background-color: #15171c;
  }
`;
const SuggestionsWrapper = styled.div`
  width: 80%;
  height: 100%;
`;
const Suggestion = styled.div`
  display: flex;
  background-color: #15171c;
  color: #fff;
  margin-top: 0.5rem;
  padding: 0.2rem;
  border: 2px solid #fff;
  cursor: pointer;
  &:focus {
    background-color: #fff;
    color: #15171c;
  }
`;
const SuggestionUserInfo = styled.div`
  padding: 0.5rem;
`;
const SearchBarWrapper = styled.div`
  margin: 4rem 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const input = useRef();
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => setSuggestions(res.data.results));
  }, []);

  return (
    <SearchBarWrapper onClick={() => setDisplay(!display)}>
      <Searchbox
        ref={input}
        type="text"
        name="input"
        onChange={({ target }) => setSearch(target.value)}
        onClick={() => setDisplay(true)}
        value={search}
      />

      <SuggestionsWrapper>
        {display && search.length > 0
          ? suggestions
              .filter((suggestion) =>
                `${suggestion.name.first} ${suggestion.name.last}`
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((suggestion, i) => {
                if (i < 5) {
                  return (
                    <Suggestion
                      onClick={() =>
                        setSearch(
                          `${suggestion.name.first} ${suggestion.name.last}`
                        )
                      }
                      key={suggestion.cell}
                    >
                      <img
                        src={
                          suggestion.picture.thumbnail
                            ? suggestion.picture.thumbnail
                            : "https://via.placeholder.com/40"
                        }
                        alt=""
                        className="suggestion__img"
                        key={suggestion.login.md5}
                      />

                      <SuggestionUserInfo key={suggestion.login.salt}>
                        <h3
                          className="suggestion__name"
                          key={suggestion.login.uid}
                        >{`${suggestion.name.first} ${suggestion.name.last}`}</h3>
                        <p
                          className="suggestion__age"
                          key={suggestion.login.sha256}
                        >
                          Age: {suggestion.dob.age}
                        </p>
                      </SuggestionUserInfo>
                    </Suggestion>
                  );
                }
                return null;
              })
          : null}
      </SuggestionsWrapper>
    </SearchBarWrapper>
  );
};
export default SearchBar;
