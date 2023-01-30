import { Button, Heading, Image } from "@aesop-engineering/gel";
import "./home.css";

const Home = ({ id }) => (
  <div className="home" id={id}>
    <Heading level="1" size="large" className="title">
      Let us help you choose product
    </Heading>
    <Button className="start" theme="dark">
      Start your journey
    </Button>
    <Image
      className="bottom-img"
      sizes={{
        large:
          "https://www.aesop.com/u1nb1km7t5q7/30R0aQPStrRrvb1Wexeu7j/89171af0365c0e157092dcc16c954208/Aesop_Gift_Finder_2022_Product_Banner_Desktop_XL_5120x844px.png",
      }}
    />
  </div>
);

export { Home };
