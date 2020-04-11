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
import IndexAsKey from './components/itemList/IndexAsKey';
import Stylesheet from './components/stylingCSS/Stylesheet';
import InlineCSS from './components/stylingCSS/Inline';
import './components/stylingCSS/cssModule/appStyle.css';
import styles from './components/stylingCSS/cssModule/appStyle.module.css';
import Form from './components/form/form';
import MountingMethod from './components/lifecycles/mountingMethod/MountingA';
import UpdatingMethod from './components/lifecycles/updatingMethod/UpdatingA';


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
        {/*<PersonList></PersonList>*/}
        {/*<IndexAsKey></IndexAsKey>*/}
        {/*<Stylesheet></Stylesheet>*/}
        {/*Passing as a props - Using leteral
        <Stylesheet primary={true}></Stylesheet>*/}
        {/*<InlineCSS></InlineCSS> */}
        {/*<h1 className='error'>Error - appStyle</h1>
        <h1 className={styles.success}>Success - appStyle.module</h1>*/}
        {/*<Form></Form>*/}
        {/*<MountingMethod></MountingMethod>*/}
        <UpdatingMethod></UpdatingMethod>

      </div>
    );
  }

}

export default App;
