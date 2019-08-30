Welcome to my React Summary!

---------- 1. Class/Component: 

    -- Old:
    
        class Welcome extends React.Component {
    
    
        render() {
        
            return <h1>Hello, {this.props.name}</h1>;
            
            }
        }
        
        
    -- React 16.8^ :
    
        function Welcome(props) {
        
        return
        
            <h1>Hello, {props.name}</h1>;
        }

---------- 2. Constructor & Bind Functions: 

    -- Old:
        
        "For every function, we need to bind it in the Constructor:"
        
        class Foo extends Component {
        
            constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
                }
                
            handleClick() {
                console.log('Click happened');
                }
                
            handleClick2 = () =>{
                console.log('This is a declare example')                
                }
            
            this. handleClick2();
                
            render() {
                return <button onClick={this.handleClick}>Click Me</button>;
                }
             }

        
       
        
    -- React 16.8^ :
        
        "Here we don't need the constructor, or the binding."
        "Simple function declration and calling:"
        
        function Welcome(props) {
        
            handleClick();
        
            function handleClick() {
                console.log('Click happened');
                }
        }


---------- 3. Props:
    
    "Props are the const features of an app. When an app using other app it can send those features to the son app"

    -- Old:
        Main app:
        
        class Welcome extends React.Component {
            render() {
                <Welcome name={'Boby'} />;
                }
            }
            
        Son app:
        
        class Welcome extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>;
                }
            }
        
        
    -- React 16.8^ :
    
         MainMain app:
         
            ReactDOM.render( <App />, document.getElementById('root')
            
                );
    
    
         Main app:
        
            function App() {
                return (
                    <div>
                        <Welcome name="Sara" />
                        <Welcome name="Cahal" />
                        <Welcome name="Edite" />
                    </div>
                    );
                }
            
        Son app:
            
        function Welcome(props) {
    
            return <h1>Hello, {props.name}</h1>;
        
        }





---------- 4. States:
    
    "States is the changable features of the component.
     We need to initial the first state.
     Remember, every time we use state or change it, it refresh the component and those inside her"
     

    -- Old:
        
        "We declared a state named features which is init as an empty array.
         When we want to setState, we actually insert into the products the data "
    
        this.state = {products: [] }
        
        this/self.setState({products:data})
        
    -- React 16.8^ (HOOKS) :
        
        "We no longer using this. Now we set a state, a function to set it, and the initial value."
        
        const [age, setAge] = useState(42);
        const [fruit, setFruit] = useState('banana');
        const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
        
        setFruit('orange');