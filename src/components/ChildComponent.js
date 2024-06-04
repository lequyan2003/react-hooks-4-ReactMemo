import React from 'react'

function ChildComponent() {
    console.log('Child Component - render');
    return (
        <div>
            <p>Child Component</p>
        </div>
  )
}

export default React.memo(ChildComponent);
// export default React.memo(ChildComponent, (prevProp, nextProp) => {
//     return prevProp.name === nextProp.name;
// });