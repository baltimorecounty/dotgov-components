import React from "react";
import PropTypes from "prop-types";

const BreadcrumbLinkItem = props => {
  const { link, text } = props;
  return (
    <a className="breadcrumb" href={link}>
      {text}
    </a>
  );
};

BreadcrumbLinkItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string,
  /** The copy that exists inside the a tag */
  text: PropTypes.string.isRequired
};

export default BreadcrumbLinkItem;
