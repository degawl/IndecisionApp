class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({
                    options
                }));
            }
        } catch (error) {
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentwillunmount');
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    render() { 
        const subtitle = 'Have a computer decide for you!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <Options 
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove all</button>
            {props.options.length === 0 && <p>Please add some data</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleRemoveOption(props.optionText)
                    }}>
                    Remove
                </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name='option' type='text' placeholder='Add options'/>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp 
    options={[]}
    />, document.getElementById('app'));