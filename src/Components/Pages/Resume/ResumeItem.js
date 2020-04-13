import React from "react";

export const ResumeItem = ({itemTitle, content, itemDetails}) => (
  <div className="resume-item"><span className="item-arrow"/>
    <h5 className="item-title">{itemTitle}</h5><span className="item-details common-color">{itemDetails}</span>
    <p className="item-description common-color">{content}</p>
  </div>
);
export const ResumeItemList = ({listTitle, listItems}) => (
  <div className="resume-item"><span className="item-arrow"/>
    <h5 className="item-title">{listTitle}</h5>
    <ul className="item-description common-color list-skills">
      {listItems.map((item) => <li key={item}>{item}</li> )}
    </ul>
  </div>
  );

export default {
  ResumeItem,
  ResumeItemList
};
