import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import { Card, Icon, Modal } from "antd";
import Nav from "./Nav";

const { Meta } = Card;

function ScreenArticlesBySource(props) {
  const [articleList, setArticleList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  var { id } = useParams();

  useEffect(() => {
    async function loadArticle() {
      var rawResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=${id}&language=fr&sortBy=popularity&apiKey=e26d973dd7d04ce7bb0731a081c3f553`
      );
      var response = await rawResponse.json();
      setArticleList(response.articles);
      console.log("test", response);
    }
    loadArticle();
  }, []);

  var showModal = (title, content) => {
    setIsModalVisible(true);
    setTitle(title);
    setContent(content);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Nav />
      <div className="Banner" />
      <div className="Card">
        {articleList.map((article, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: 300,
                margin: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              cover={<img alt="example" src={article.urlToImage} />}
              actions={[
                <Icon type="read" key="ellipsis2" onClick={() => showModal(article.title, article.content)} />,
                <Icon type="like" key="ellipsis" />,
              ]}
            >
              <Meta title={article.title} description={article.description} />
            </Card>

            <Modal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>{content}</p>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScreenArticlesBySource;
