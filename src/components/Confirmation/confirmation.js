import cx from "classnames";
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
      <Button isAlternate={true} onClick={() => {}}>
        See more products
      </Button>
    </div>
  );
};

const SkinTypeSummary = () => {
  const localStorageObj = { ...localStorage };
  const keys = Object.keys(localStorageObj);

  return (
    <div className="skin-type-summary">
      <Heading level="1" size="large">
        Your answer summary
      </Heading>
      <div className="summary-table">
        {keys.map((key) => {
          return (
            <div className="summary-table-row" key={key}>
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
        Subscribe to receive your skin summary
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
        Or register to start your Aesop skin care journey
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
  const classSet = cx("confirmation", { active: isShow });

  return (
    <div id={id} className={classSet}>
      <SkinTypeSummary />
      <ProductRecommended />
      <Subscribe />
      <Register />
    </div>
  );
};

export { Confirmation };
