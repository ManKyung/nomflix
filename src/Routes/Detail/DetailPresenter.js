import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const HomePresenter = ({result, loading, error}) => 
loading ? (<Loader />) : (
<Container>
  <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
  <Content>
    <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterImage.png")} />
  </Content>
</Container>
)
;

HomePresenter.propTypes = {
  result:PropTypes.object,
  loading:PropTypes.bool.isRequired,
  error:PropTypes.string
}

export default HomePresenter;