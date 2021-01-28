import { FlyToInterpolator, Marker } from "react-map-gl";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";
import * as d3 from "d3-ease";
import Icon from "../assets/marker.png";
import axios from "axios";

const Map = () => {
  const [users, setUsers] = useState({});
  const defaultViewport = {
    width: "100vw",
    height: "100vh",
    latitude: 23.022505,
    longitude: 72.571365,
    zoom: 7,
    transitionDuration: 5000,
    transitionInterpolator: new FlyToInterpolator(),
    transitionEasing: d3.easeCubic,
  };
  const [viewport, setViewport] = useState(defaultViewport);
  useEffect(() => {
   // console.log(data);
    // axios({
    //   method: "get",
    //   url: "https://randomuser.me/api/?results=10",
    // }).then(console.log);
  }, []);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiaGVldC12YWtoYXJpYSIsImEiOiJja2V1ejJzam0zenRwMnNwYzVnOHRpb3RsIn0.ucjS-K-34-JJgvlfAbHmCw"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      (
      {
        <Marker latitude={23.022505} longitude={72.571365}>
          <img src={Icon} alt="" height="50px" />
        </Marker>
      }
      )
    </ReactMapGL>
  );
};

export default Map;
