Compenents
	- They are the building blocks of React
	- Can be reused again and again as individual modules
	
Split into 2 types
	- Stateless functional components
	- Stateful Class components
	
Stateless functional Components
	- They are JS functions
	- Usually returns HTML
	- Added in js file or jsx file
	
Stateful Class components
	- Extends the components class
	- Must have render method and return HTML value
	- Multiple HTML tags should be enclosed in div tags or only the last added HTML tag will be rendered
	- Added in js file or jsx file

Pure Components
	- React.PureComponent is a variation of React.Component
	- Allow only shallow comparison of Props and state 
	- Doesn't render if there is no change in the DOM values
	
HigherOrderComponents
	- Takes a component and returns a newComponent
	- Eg. const test = higherOrderComponent(OriginalComponent)
	
Export
	- Default export
	- Named export
	
Default export 
	- It exports all classes/functions in the js by default so that all the classes/functions can be imported
	- It can be renamed and given alias names
	- Only one export per file 
	- Eg. export default className
	
Named export
	- It uses export keyWord for all classes/functions
	- Can be picked specifically before importing
	- Ex. import {class1, class2} from "./ClassComponentPath"
	
Component life cycle
	- Mounting - ComponentWillMount() --> render() --> ComponentDidMount()
	- Updation - ComponentWillREceiveProps() --> ShouldComponentUpdate() --> ComponentWillUpdate() --> Render() --> ComponentDidUpdate()
	- Unmounting - ComponentWillUnmount()
	
