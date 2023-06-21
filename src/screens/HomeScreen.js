import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import User from "../components/User";
import Paginate from "../components/Paginate";
import { listUsers } from "../actions/userActions";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch()
  const search = useLocation().search
  const domain = new URLSearchParams(search).get('domain') || ''
  const gender = new URLSearchParams(search).get('gender') || ''
  const availability = new URLSearchParams(search).get('availability') || ''
  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList
  const { pageNumber, keyword } = useParams()
  const key = keyword? keyword : ''
  const page = Number(pageNumber) || 1
  const pageSize = 20
  const last = page * pageSize
  const first = last - pageSize


  useEffect(() => {
    dispatch(listUsers(keyword, page));
  }, [dispatch, keyword, page]);

  return (
    <>
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
        <Row className="d-flex">
            {users
              .filter((user) => {
                return key.toLowerCase() === ""
                  ? user
                  : (user.first_name.toLowerCase().includes(key));
              })
              .filter((user) => {
                return domain === ""
                  ? user
                  : (user.domain.includes(domain));
              })
              .filter((user) => {
                return gender === ""
                  ? user
                  : (user.gender.includes(gender));
              })
              .filter((user) => {
                return availability === ""
                  ? user
                  : (String(user.available) === availability);
              })
              .slice(first, last)
              .map((user) => (
                <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
                  <User user={user} />
                </Col>
              ))}
          </Row>
          <Paginate
            pages={Math.ceil(users.length / pageSize)}
            page={page}
            keyword={key ? key : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
