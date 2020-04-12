import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import FunctionComp from './components/funClassComp/FunctionComp';
import ClassComp from './components/funClassComp/ClassComp';
import MessageComp from './components/state/Message';
import CountComp from './components/setState/Counter';
import FunctionClickEvent from './components/funClassEventBind/FunctionClickEvent';
import ClassEventBind from './components/funClassEventBind/ClassEventBind';
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
import Fragment from './components/fragments/Fragments';
import PureComp from './components/pureComponents/ParentComp';
import MemoComp from './components/memoComponent/parentComps';

class App extends Component {
  render() {
    return (
      <div className="App code tc">
        {/*<FunctionComp name="propsName1"><p>This is a props</p></FunctionComp>*/}
        {/*<FunctionComp name="propsName2"><p>This is a props 2</p></FunctionComp>*/}
        {/*<ClassComp name="propsName1"/>*/}
        {/*<ClassComp name="propsName2"/>*/}
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
        {/*<UpdatingMethod></UpdatingMethod>*/}
        {/*<Fragment></Fragment>*/}
        {/*<PureComp></PureComp>*/}
        {/*<MemoComp></MemoComp>*/}
      </div>
    );
  }

}

export default App;
