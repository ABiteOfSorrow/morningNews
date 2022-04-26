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

  return (
    <div>
      <Nav />

      <div className="Banner" />

      <div className="HomeThemes">
        <List
          itemLayout="horizontal"
          dataSource={sourceList}
          renderItem={(item) => (
            <List.Item>
              <Link to="/screenarticlesbysource/">
                <List.Item.Meta
                  avatar={<Avatar src={`/images/${item.category}.png`} />}
                  title={<Link to={`/screenarticlesbysource/${item.id}`}>{item.name}</Link>}
                  description={item.description}
                />
              </Link>
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
