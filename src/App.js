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
import Refs1st from './components/useRef/refs/Refs1Way';
import Refs2st from './components/useRef/refs/Refs2Way';
import Ref2Class from './components/useRef/refsWithClass/FocusInput';
import ForwardRef from './components/useRef/refsForwarding/ForwardRefParent';
import Portal from './components/portals/PortalDemo';
import Errror from './components/errorBoundary/getDerived/Hero';
import ErrorBoundaryDerived from './components/errorBoundary/getDerived/ErrorBoundaryDerived';
import TvBrand from './components/errorBoundary/compDidCatch/tvBrand';
import ErrorBoundaryCatch from './components/errorBoundary/compDidCatch/ErrorBoundaryCatch';
import ClickCounter1 from './components/higherOrderComp/part1/ClickCounter1';
import HoverCounter1 from './components/higherOrderComp/part1/HoverCounter1';
import ClickCounter2 from './components/higherOrderComp/part2/ClickCounter2';
import HoverCounter2 from './components/higherOrderComp/part2/HoverCounter2';
import ClickCounter3 from './components/higherOrderComp/part3/ClickCounter3';
import HoverCounter3 from './components/higherOrderComp/part3/HoverCounter3';

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
        {/*<Refs1st></Refs1st>*/}
        {/*<Refs2st></Refs2st>*/}
        {/*<Ref2Class></Ref2Class>*/}
        {/*<ForwardRef/>*/}
        {/*<Portal/>*/}
        {/*<ErrorBoundaryDerived>
          <Errror heroname="Batman"></Errror>
          <Errror heroname="Joker"></Errror>
        </ErrorBoundaryDerived>*/}
        {/*<ErrorBoundaryCatch>
          <TvBrand brandname="Sony"></TvBrand>
          <TvBrand brandname="Samsung"></TvBrand>
        </ErrorBoundaryCatch>*/}
        {/*<ClickCounter1></ClickCounter1>
        <HoverCounter1></HoverCounter1>*/}
        {/*<ClickCounter2></ClickCounter2>
        <HoverCounter2></HoverCounter2>*/}
        {/*<ClickCounter3 name='Paul-Elvis'></ClickCounter3>
        <HoverCounter3></HoverCounter3>*/}
      </div>
    );
  }

}

export default App;
