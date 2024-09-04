import hardHat from "../../assets/hard-hat.png";
import info from "../../assets/information.png";
import coffee from "../../assets/coffee-maker-outline.png";
import feedback from "../../assets/comment-quote.png";

export const renderImage = (img: string) => {
  switch (img) {
    case "hard-hat":
      return <img src={hardHat} alt="Hard hat" slot="image" />;
    case "info":
      return <img src={info} alt="Info" slot="image" />;
    case "coffee":
      return <img src={coffee} alt="Coffee" slot="image" />;
    case "feedback":
      return <img src={feedback} alt="Feedback" slot="image" />;
    default:
      return null;
  }
};
