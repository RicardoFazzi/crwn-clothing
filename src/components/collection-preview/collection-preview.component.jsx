import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collectio-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => item.id <= 4)
          .map(({id, ...itemProps}) => (
            <CollectionItem key={id} { ...itemProps }></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
