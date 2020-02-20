import React, { useEffect } from "react";
import * as actionCreators from "./stateManagement/actionCreators";
import { connect } from "react-redux";
import { getData } from "./stateManagement/actionCreators";
import Form from "./components/Form";

function App(props) {
  console.log(props);
  useEffect(() => {
    props.getSpaceXDataActionCreator();
  }, []);

  return (
    <div className="App">
      <Form />

      <h1>
        {props.dataFromApi.map((item, key) => {
          return <div>{item.mission_name}</div>;
        })}
      </h1>
    </div>
  );
}

// Here we have the reducers from Step 4 in combineReducers({})
function mapStateToProps(state) {
  // state comes from combinedReducers in index.js
  return {
    dataFromApi: state.spaceData
  };
}

// Step 8 - Use connect from react-redux to wrap our component
export default connect(
  mapStateToProps,
  actionCreators // Step 9 - Bring in action creators
)(App);

// export default App;
