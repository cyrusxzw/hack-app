import "./confirmation.css";
import { Carousel, Heading, Button } from "@aesop-engineering/gel";
import { ProductFixture } from "./product.fixtures";
import { useState } from "react";

const ProductRecommended = () => {
  return (
    <div className="product-recommended">
      <Carousel
        introduction={ProductFixture.introduction}
        slides={ProductFixture.slides}
      />
    </div>
  );
};

const SkinTypeSummary = () => {
  const localStorageObj = { ...localStorage };
  const keys = Object.keys(localStorageObj);
  console.log(localStorageObj);
  return (
    <div className="skin-type-summary">
      <Heading level="1" size="large">
        Your answer summary
      </Heading>
      <div className="summary-table">
        {keys.map((key) => {
          return (
            <div className="summary-table-row">
              <div className="summary-table-item">{key}</div>
              <div className="summary-table-item">{localStorageObj[key]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Subscribe = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="subscribe">
      <Heading level="1" size="large">
        Subscribe for more details
      </Heading>
      <div className="subscribe-input">
        <input />
        <Button
          isLoading={isLoading}
          isAlternate={true}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 1000);
          }}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="register">
      <Heading level="1" size="large">
        Or register to get some complimentary sample
      </Heading>
      <div className="register-input">
        <Button
          isLoading={isLoading}
          isAlternate={true}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 1000);
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

const Confirmation = ({ id, isShow }) => {
  return (
    <div id={id} className={"confirmation"}>
      <SkinTypeSummary />
      <ProductRecommended />
      <Subscribe />
      <Register />
    </div>
  );
};

export { Confirmation };
