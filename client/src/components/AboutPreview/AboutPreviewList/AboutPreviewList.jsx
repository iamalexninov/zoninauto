import { ListItems } from "../AboutPreview.text";
import { AboutPreviewListItem } from "../AboutPreviewListItem/AboutPreviewListItem";

const AboutPreviewList = () => {
  return (
    <ul>
      {ListItems.map((item) => (
        <AboutPreviewListItem text={item} key={Math.random()}/>
      ))}
    </ul>
  );
};

export default AboutPreviewList;
