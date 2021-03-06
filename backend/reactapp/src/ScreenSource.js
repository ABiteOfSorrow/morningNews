import React, { useState, useEffect } from "react";
import "./App.css";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function ScreenSource() {
  const [sourceList, setSourceList] = useState([]);

  useEffect(() => {
    async function loadData() {
      var rawResponse = await fetch(
        "https://newsapi.org/v2/top-headlines/sources?country=fr&language=fr&sortBy=popularity&apiKey=e26d973dd7d04ce7bb0731a081c3f553"
      );
      var response = await rawResponse.json();
      setSourceList(response.sources);
    }
    loadData();
  }, []);
  console.log(sourceList);

async function changeToFrance() {
  var rawResponse = await fetch(
    "https://newsapi.org/v2/top-headlines/sources?country=fr&language=fr&sortBy=popularity&apiKey=e26d973dd7d04ce7bb0731a081c3f553"
  );
  var response = await rawResponse.json();
  setSourceList(response.sources);
}

async function changeToEngland() {
  var rawResponse = await fetch(
    "https://newsapi.org/v2/top-headlines/sources?country=gb&language=en&sortBy=popularity&apiKey=e26d973dd7d04ce7bb0731a081c3f553"
  );
  var response = await rawResponse.json();
  setSourceList(response.sources);
}


  return (
    <div>
      <Nav />

      <div className="Banner" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img onClick={() => changeToFrance()} width="60px" src="/images/france.png"/>
        <img onClick={() => changeToEngland()} width="60px"src="/images/england.png"/>
        </div>

      <div className="HomeThemes">
        <List
          itemLayout="horizontal"
          dataSource={sourceList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`/images/${item.category}.png`} />}
                title={<Link to={`/screenarticlesbysource/${item.id}/${item.language}`}>{item.name}</Link>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ScreenSource;
{
  /* <a href={item.src}>{ */
}
