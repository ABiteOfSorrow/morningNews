import React, { useState } from "react";
import "./App.css";
import { Card, Icon, Modal } from "antd";
import Nav from "./Nav";
import { connect } from "react-redux";

const { Meta } = Card;

function ScreenMyArticles(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  var noArticle;
  if (props.myArticles.length == 0) {
    noArticle = (
      <h1 style={{ display: "flex", justifyContent: "center" }}> No Articles </h1>
    );
  }
  console.log(props.myArticles);
  return (
    <div>
      <Nav />
      <div className="Banner" />
      {noArticle}
      <div className="Card">
        {props.myArticles.map((myArticle, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: 300,
                margin: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              cover={<img alt="image" src={myArticle.urlToImage} />}
              actions={[
                <Icon
                  type="read"
                  key="ellipsis2"
                  onClick={() => showModal(myArticle.title, myArticle.content)}
                />,
                <Icon
                  onClick={() => props.deleteToWishList(myArticle.title)}
                  type="delete"
                  key="ellipsis"
                />,
              ]}
            >
              <Meta title={myArticle.title} description={myArticle.description} />
            </Card>
            <Modal
              title={title}
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>{content}</p>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { myArticles: state.article };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteToWishList: function (title) {
      dispatch({ type: "DELETE_ARTICLE", title });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenMyArticles);
