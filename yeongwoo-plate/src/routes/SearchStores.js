import React, { useEffect, useCallback } from "react";
import StoresList from "../components/StoresList";
import { withRouter } from "react-router-dom";
import FlashMessage from "../components/FlashMessage";
import { Grid, Image } from "semantic-ui-react";

// 새로고침해도 결과가 사라지지 않도록 하기(storage이용)
// storage x, stores 값 o

let page = 1;
let data = [];
let end = false;
let searchValue = "";
let start = false;
let firstPage = true;
export default withRouter(
  ({
    error,
    onSearchStores,
    stores,
    isLoading,
    match: {
      params: { value },
    },
  }) => {
    if (value !== searchValue) {
      page = 1;
      data = [];
      firstPage = true;
    }
    if (isLoading) {
      end = true;
    }
    if (!stores.results) {
      const params = { name: value, page: 1, append: false };
      onSearchStores(params);
      start = true;
    }
    if (!isLoading && end) {
      searchValue = value;
      let moreData = [];
      moreData = stores.results;
      if (moreData.length > 0 && page !== 1) {
        data = data.concat(moreData);
      } else if (moreData.length > 0 && page === 1 && firstPage) {
        data = data.concat(moreData);
        firstPage = false;
      } else {
        page--;
      }
      if (page === 0) {
        page = 1;
      }
      end = false;
      start = false;
    }
    const scrollHandler = useCallback(() => {
      let scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      let scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      let clientHeight = document.documentElement.clientHeight;

      if (
        scrollTop + 10 >= scrollHeight - clientHeight &&
        data.length < stores.count &&
        !start
      ) {
        const params = {
          name: value,
          page: ++page,
          append: false,
        };
        onSearchStores(params);
        start = true;
      }
    });

    useEffect(() => {
      window.addEventListener("scroll", scrollHandler, true);
      return () => window.removeEventListener("scroll", scrollHandler, true);
    }, [scrollHandler]);

    if (isLoading && !data) {
      return <div>Loading...</div>;
    }
    return (
      <>
        {" "}
        <style>
          {`.fFitEh {'
            margin: 0 auto;
            max-width: none;
            width: 95%;
        }`}
          {`.right.floated.three.wide.column {'
            position: sticky;
            display: inline-block;
            position: sticky;
            top: 140px;
            height: 80px;
        }`}
          {`.darkIamge {
            filter: brightness(70%);
            max-height: 170px;
        }`}
          {`.blueText {
            font-size: 17px;
            color: #3897F0;
            font-weight: bold;
        }`}
        </style>
        <Grid>
          <Grid.Row>
            <Grid.Column floated="left" width={13}>
              <div>{error && <FlashMessage message={error} />}</div>
              <div style={{ margin: "0px 0px 0px 20px" }}>
                <p className="blueText">"{value}" 검색 결과</p>
              </div>
              <div style={{ margin: "14px 20px 25px 20px" }}>
                <StoresList stores={data} onScroll={scrollHandler} />
              </div>
            </Grid.Column>
            <Grid.Column floated="right" width={3}>
              <div>{error && <FlashMessage message={error} />}</div>
              <p className="blueText">관련 콘텐츠</p>
              <br />
              <Image
                className="darkIamge"
                src="https://mp-seoul-image-production-s3.mangoplate.com/313740_1599772569463721.jpg"
                size="medium"
                bordered
              />
              <br />

              <Image
                className="darkIamge"
                src="https://mp-seoul-image-production-s3.mangoplate.com/641_1431309041931"
                size="medium"
                bordered
              />
              <br />

              <Image
                className="darkIamge"
                src="https://mp-seoul-image-production-s3.mangoplate.com/10097_1439987099782"
                size="medium"
                bordered
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
);
