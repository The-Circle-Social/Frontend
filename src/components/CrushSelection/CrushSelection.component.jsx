import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
const Card = styled.div`
  height: 35rem;
  max-width: 30rem;
  border: 2px solid #000;
  display: grid;
  place-items: center;
  padding: 1rem;
  margin: 0 1rem;
`;
const CardWrapper = styled.div`
  height: 100vh;
  widht: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImg = styled.img`
  max-height: 20rem;
  max-widht: 20rem;
  height: 100%;
  border-radius: 100%;
  widht: 100%;
`;
const HobbiesWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem;
  flex-wrap: wrap;
`;
const Hobbies = styled.p`
  background: #666;
  padding: 0.5rem 3rem;
  font-size: 1.1rem;
  margin: 0.3rem 0.3rem 0 0;
  border-radius: 100px;
`;
const Description = styled.p`
  widht: 100%;
`;

const CrushSelection = ({ user }) => {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);
  const [peopleDislike, setPeopleDislike] = useState([]);
  const [peopleLike, setPeopleLike] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(people[index]);

  useEffect(() => {
    
    var longitude = 0,
      latitude = 0;
      console.log(navigator.geolocation)
    navigator.geolocation.getCurrentPosition((position) => {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        const data = JSON.stringify({
          name1: user.username,
          longitude1: longitude,
          latitude1: latitude,
        });
        axios({
          method: "post",
          url: "http://localhost:8000/view",
          data,
        }).then((resp) => {
          const objArr = Object.keys(resp.data);
          const personArr = [];
          for (let i = 0; i < objArr.length; i++) {
            if (resp.data[objArr[i]].name !== user.username) {
              personArr.push(resp.data[objArr[i]]);
              //console.log(resp.data[objArr[i]]);
            }
          }
          console.log(personArr, "Person Arr");
          setPeople(personArr);
          setCurrentPerson(people[0]);
          setIndex(0);
        }).then(() => {
          console.log(people, "People");
          setCurrentPerson(people[0]);
          setIndex(0);
        })
      });
    console.log(people[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (action) => {
    if (action === "like") {
      const LikeArr = peopleLike;
      LikeArr.push(currentPerson);
      setPeopleLike(LikeArr);
    } else {
      const DislikeArr = peopleDislike;
      DislikeArr.push(currentPerson);
      setPeopleDislike(DislikeArr);
    }
    setIndex(index + 1);
    setCurrentPerson(people[index]);
    console.log(people.length, index, peopleDislike, peopleLike);
  };
  return (
    <CardWrapper>
      <button onClick={() => handleClick("dislike")}>X</button>
      {currentPerson ? (
        <Card>
          <UserImg src={`http://localhost:8000${currentPerson.image}`} />
          <div className="user__info">
            <h1>{currentPerson.name}</h1>
            <Description>{currentPerson.description}</Description>
            <h3 className="">Hobbies</h3>
            <HobbiesWrapper>
              {currentPerson.hobby.map((hobby) => (
                <Hobbies>{hobby}</Hobbies>
              ))}
            </HobbiesWrapper>
          </div>
        </Card>
      ) : (
        <h1>Refresh Page</h1>
      )}
      <button onClick={() => handleClick("like")}>L</button>
    </CardWrapper>
  );
};

export default CrushSelection;
