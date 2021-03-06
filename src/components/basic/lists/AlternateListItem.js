import React from "react";
import PropTypes from "prop-types";

const AlternateListItem = (props) => {
  const { link, linkText, className, icon } = props;

  const handlesAlternateListItemOnClick = (elem) => {

    var list = document.getElementsByClassName("dg_alt-list");
    var url = window.location.href;
  
    list.forEach((item) => {
      var listItem = item.getElementsByTagName("a");
      listItem.forEach((x) => {
        if (x.href === url) {
          x.parentNode.className = "dg_alt-list-current";
        }
      });
    });
  };

  return (
    <li onClick={handlesAlternateListItemOnClick} className={className}>
      <a href={link}>
        {linkText}
        {icon ? <i className="fas fa-arrow-circle-right"></i> : null}
        
      </a>
    </li>
  );
};

AlternateListItem.propTypes = {
  /** The link or href for the a tag */
  link: PropTypes.string.isRequired,
  /** The copy that exists inside the a tag */
  linkText: PropTypes.string.isRequired,
};

export default AlternateListItem;
