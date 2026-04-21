import React from "react";
import { Card } from "react-bootstrap";
import FeatureStepFirstIcon from "@atoms/icons/featureStepFirstIcon";
import FeatureStepSecondIcon from "@atoms/icons/featureStepSecondIcon";
import FeatureStepThirdIcon from "@atoms/icons/featureStepThirdIcon";

type Props = {
  variant: "step1" | "step2" | "step3";
  title: string;
  topText: string;
  bottomText?: string;
};

const stepIcons = {
  step1: FeatureStepFirstIcon,
  step2: FeatureStepSecondIcon,
  step3: FeatureStepThirdIcon,
};

function FeatureStepTransactionItem(props: Props) {
  const { variant, title, topText, bottomText } = props;
  const Icon = stepIcons[variant];
  return (
    <Card className=" feature-card border-0 h-100 ">
      <Icon />
      <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
      <p className="text-lg color-palette-1 mb-0">
        {topText}
        <br />
        {bottomText ? bottomText : null}
      </p>
    </Card>
  );
}

export default FeatureStepTransactionItem;
