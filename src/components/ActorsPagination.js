import React from "react";
import { Pagination } from "antd";
import PropTypes from "prop-types";

function ActorsPagination({ onChange }) {
  ActorsPagination.propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  return (
    <div>
      <Pagination
        style={{ color: "white", textAlign: "center" }}
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
        onChange={onChange}
      />
    </div>
  );
}

export default ActorsPagination;
