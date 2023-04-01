import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`Hello Parent, says ${childName}`);
  };

  return <ChildComponent greetHandler={greetParent}></ChildComponent>;
};
