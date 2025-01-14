import React, { memo } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const TotalAmount = ({ toggleHandler, totalPrice }) => {

  const orderButton =
    totalPrice > 0 ? (
      <Button fontWeight="500" fontSize="16px" padding="10px 32px">
        Order
      </Button>
    ) : null;

  return (
    <div>
      <InfoContainer>
        <Label>Total Amount</Label>
        <Prise>$ {+totalPrice.toFixed(2)}</Prise>
      </InfoContainer>
      <ActionButtonContainer>
        <Button
          bgColor="#fff"
          border="1px solid #8A2B06"
          color="#8A2B06"
          variants="outlined"
          fontWeight="600"
          fontSize="16px"
          padding="10px 32px"
          hvBgColor="#8A2B06"
          hvColor="#fff"
          acvColor="#fff"
          onClick={toggleHandler}>
          Close
        </Button>
        {orderButton}
      </ActionButtonContainer>
    </div>
  );
};

const Label = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;

const Prise = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
`;

const InfoContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const ActionButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
