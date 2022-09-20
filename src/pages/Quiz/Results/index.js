/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Results = ({ quizResults }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [image, setImage] = useState('');

  console.log(quizResults.drinkName.toLowerCase().replace('/', ''));

  import(
    `../../../assets/images/coktails/${quizResults.drinkName
      .toLowerCase()
      .replace('/', '')}.svg`
  ).then((module) => {
    setImage(module.default);
  });

  return (
    <>
      <div className="container results">
        <section className="col-12 text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="py-5">
                You are in
                {' '}
                <br />
                {' '}
                <span className="cormoorant-italic">
                  TEAM
                  {' '}
                  {quizResults.clusterName}
                </span>
              </h1>
            </div>
          </div>
          <div className="vline mx-auto" />
          <div className="row">
            <div className="col-12">
              <div className="py-5">
                <h2>
                  we think you like
                  {' '}
                  {quizResults.drinkName}
                </h2>
              </div>
            </div>
            <div className="col-12 mt-3 mb-5">
              <Link to="/menu" className="btn btn-primary">
                See our menu
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="background-blur">
                <img src={image} alt="" className="img-fluid my-5 pb-5" />
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <p>
                    Not a fan of
                    {' '}
                    {quizResults.drinkName}
                    ?
                  </p>
                </div>
              </div>
              <div className="row flex-md-row-reverse">
                <div className="col-12">
                  <Link to="/change" className="btn btn-outline-primary">
                    Let us know
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Results;
