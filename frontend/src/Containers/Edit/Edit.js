import React, { useEffect, useState } from "react";
import { MainContentContainer, PageHeader, Line } from "./Edit.elements";
import { DiaryForm } from "../../Components";
import { useParams, Redirect } from "react-router";
import axios from "axios";

const Edit = ({ token, currUser }) => {
  let { id } = useParams();
  const [content, setContent] = useState(null);
  const [loaded, setLoad] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading Content");
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/musicdiary/${id}/`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
        }
        return response.data;
      })
      .then((data) => {
        setContent(data);
        return data;
      })
      .then((data) => {
        currUser !== data.user ? setInvalid(true) : "";
      })
      .then(() => {
        setLoad(true);
      });
  }, []);

  return invalid ? (
    <Redirect to="/" />
  ) : !loaded ? (
    ""
  ) : (
    <>
      <MainContentContainer>
        <PageHeader>글 수정하기</PageHeader>
        <Line />

        <DiaryForm
          token={token}
          c_title={content.title}
          c_body={content.content}
          c_questionId={content.question.id}
          type={"PUT"}
        />
      </MainContentContainer>
    </>
  );
};

export default Edit;
