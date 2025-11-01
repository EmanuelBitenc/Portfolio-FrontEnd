import "../header.css";
interface LinksProps {
  name: string;
  href?: string;
  image?: string;
}
import React from "react";

const Links: React.FC<LinksProps> = ({ name, href, image }) => {
  return (
    <span className="links-button cursor-pointer ">
      <a href={href} target={image ? "_blank" : "_self"}>
        {image ? <img src={image} alt={name} /> : name}
      </a>
    </span>
  );
};

export default Links;
