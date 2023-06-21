import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listUsers } from "../actions/userActions";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";

const TeamScreen = () => {
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
        <Table striped bordered hover responsive className="table-sm team">
          <thead>
            <tr>
              <th>Teams</th>
            </tr>
          </thead>
          <tbody>
            {[...new Set(users.map((user) => user.domain))].map((domain) => (
              <tr key={domain}>
                <td md={3}>
                  <Link to={`/teams/${domain}`}>{domain}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TeamScreen;
