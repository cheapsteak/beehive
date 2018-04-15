// Framework
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions to Bind
import setSettingsValue from "../actionCreators/settings/setSettingsValue";

// Component to Contain
import Settings from "../components/Settings";

// Connect the STATE to the props fed into the component.
export const mapStateToProps = state => {
  return { settingsFields: state.settings };
};

// Connect ACTIONS to the props fed into the component.
export const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { settingsSettingAction: setSettingsValue },
    dispatch
  );
};

// Create higher-order component which feeds in specified props.
const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Settings
);

export default SettingsContainer;
