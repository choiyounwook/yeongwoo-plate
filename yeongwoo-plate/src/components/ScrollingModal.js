import React, { Component } from "react";
import { Grid, Button, Icon, Modal } from "semantic-ui-react";

export class ButtonExampleToggle extends Component {
  state = { activeItem: "btn1" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Button.Group>
        <Button
          toggle
          name="btn1"
          active={activeItem === "btn1"}
          onClick={this.handleItemClick}
        >
          평점순
        </Button>
        <Button
          toggle
          name="btn2"
          active={activeItem === "btn2"}
          onClick={this.handleItemClick}
        >
          인기순
        </Button>
        <Button
          toggle
          name="btn3"
          active={activeItem === "btn3"}
          onClick={this.handleItemClick}
        >
          리뷰순
        </Button>
      </Button.Group>
    );
  }
}

function ScrollingModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button icon>
          <Icon name="filter"></Icon>
        </Button>
      }
      style={{
        height: `auto`,
        position: `static`,
      }}
    >
      <Modal.Content>
        <Modal.Description>
          <p>검색 필터</p>
          <br />
          <ButtonExampleToggle></ButtonExampleToggle>
          <hr></hr>
          <p>지역</p>
          <br />
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <p>지역 데이터</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <hr></hr>
          <p>음식 종류</p>
          <br />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setOpen(false)}>
          취소 <Icon name=" right cancel" />
        </Button>
        <Button primary onClick={() => setOpen(false)}>
          적용 <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ScrollingModal;
