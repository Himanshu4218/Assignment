import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination className="d-flex justify-content-center">
        {page > 1 && (
          <LinkContainer
            to={
              keyword
                ? `/search/${keyword}/page/${page - 1}`
                : `/page/${page - 1}`
            }
          >
            <Pagination.Prev />
          </LinkContainer>
        )}
        <LinkContainer
          to={keyword ? `/search/${keyword}/page/${page}` : `/page/${page}`}
        >
          <Pagination.Item active>{page}</Pagination.Item>
        </LinkContainer>
        {page < pages && (
          <LinkContainer
            to={
              keyword
                ? `/search/${keyword}/page/${page + 1}`
                : `/page/${page + 1}`
            }
          >
            <Pagination.Next />
          </LinkContainer>
        )}
      </Pagination>
    )
  );
};

export default Paginate;
