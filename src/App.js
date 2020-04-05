import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import MessageComp from './components/Message';
import CountComp from './components/Counter';
import FunctionClickEvent from './components/FunctionClickEvent';
import ClassEventBind from './components/ClassEventBind';
import ChildToParent from './components/childToParent/ParentComp';
import ConditionRender from './components/conditionRender/Condition';
import PersonList from './components/itemList/PersonList';


class App extends Component {
  render() {
    return (
      <div className="App code tc">
        {/*
        <FunctionComp name="propsName1">
          <p>This is a props</p>
        </FunctionComp>
        <FunctionComp name="propsName2">
          <p>This is a props 2</p>
          <button>Start</button>
        </FunctionComp>
        <ClassComp name="propsName1"/>
        <ClassComp name="propsName2"/>
        */}

        {/*<MessageComp></MessageComp>*/}
        {/*<CountComp></CountComp>*/}
        {/*<FunctionClickEvent></FunctionClickEvent>*/}
        {/*<ClassEventBind></ClassEventBind>*/}
        {/*<ChildToParent></ChildToParent>*/}
        {/*<ConditionRender></ConditionRender>*/}
        <PersonList></PersonList>

      </div>
    );
  }

}

export default App;
