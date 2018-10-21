let infoShowing;

class VisibiltyApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleInfo = this.handleToggleInfo.bind(this);
        this.state = {
            infoShowing: false
        }
    }
    handleToggleInfo(){
        this.setState((prevState) => {
            return {
                infoShowing: !prevState.infoShowing
            }
        });
        console.log(infoShowing);
    }

    render() { 
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleInfo}>{ this.state.infoShowing ? 'Hide info' : 'Show info' }</button>
                { this.state.infoShowing && 
                    <p>Here are the deets.</p>
                }
            </div>
        );
    }
}
ReactDOM.render(<VisibiltyApp />, document.getElementById('app'));