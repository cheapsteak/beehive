// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions to Bind
import setConfigValue from "../actionCreators/config/setConfigValue";

// Component to Contain
import Config from "../components/Config";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = state => {
  return { configFields: state.config };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ configSettingAction: setConfigValue }, dispatch);
};

// Create higher-order component which feeds in specified props.
const ConfigContainer = connect(mapStateToProps, mapDispatchToProps)(Config);

export default ConfigContainer;
