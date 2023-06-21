import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { listUsers } from "../actions/userActions";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";

const TeamScreen = () => {
  const { domain } = useParams()
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <>
      <Meta />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Gender</th>
              <th>EMAIL</th>
              <th>Availability</th>
              <th>Domain</th>
            </tr>
          </thead>
          <tbody>
            {users.filter((user) => user.domain === domain)
            .map((user) => (
              <tr key={user._id}>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.gender}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>{String(user.available)}</td>
                <td>{user.domain}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TeamScreen;
