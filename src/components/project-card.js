/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { FaGitHub, FaRegEnvelope } from "react-icons/fa";
import { Link } from "gatsby";

import styles from "./project-card.module.css";

const ProjectCard = ({ title, excerpt, slug }) => {
  return (
    <div className={styles.cardWrapper}>
      <Link to={slug} className={styles.cardLink}>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProjectCard;
