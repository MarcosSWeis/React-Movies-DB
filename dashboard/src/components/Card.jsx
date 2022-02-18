import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card border-left-${props.colorBorde} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${props.colorBorde} text-uppercase mb-1`}
              >
                {props.title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.cifra}
              </div>
            </div>
            <div className="col-auto">
              <i className={`${props.icono} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.defaultProps = {
  colorBorde: "no ingreso color",
  title: "no ingreso titulo",
  cifra: 0,
  icono: "no ingreso icono",
};
Card.propTypes = {
  colorBorde: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cifra: PropTypes.number.isRequired,
  icono: PropTypes.string.isRequired,
};

export default Card;
