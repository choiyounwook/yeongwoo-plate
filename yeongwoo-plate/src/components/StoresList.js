import React from "react";
import styled from "styled-components";
import { List, Card } from "antd";
import { Image } from "semantic-ui-react";
const CustomText = styled.p`
  font-size: 17px;
  font-weight: bold;
`;

const StoresList = (props) => {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={props.stores}
      renderItem={(item) => (
        <List.Item>
          <Card
            title={
              <Image
                src="https://mp-seoul-image-production-s3.mangoplate.com/245308/268118_1457608187645_43155?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80"
                size="medium"
                bordered
              />
            }
          >
            <CustomText>{item.name}</CustomText> <br></br>
            {item.address}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default StoresList;
