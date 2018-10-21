console.log('App.js is running!');

const app = {
    title: 'Indecision app',
    subTitle: 'A react app',
    options: ['One', 'Two']
}

const numbers = [55, 101, 1000];

function getSubtitleAndOptions(subTitle, options){
    if (subTitle) {
        return (
            <div>
                <p>Subtitle: {subTitle}</p>
                <p>{ options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
                <button disabled={app.options.length === 0}onClick={decide}>What should I do?</button>
                <button onClick={onFormReset}>Reset</button>
                <ol>
                {
                    options.map((option) => <li key={option}>{option}</li>)
                }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                </form>
            </div>
        );
    }
} 

const decide = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const decision = app.options[randNum];
    alert(decision);
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderIndecisionApp();
};

const onFormReset = () => {
    app.options = [];
    renderIndecisionApp();
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {getSubtitleAndOptions(app.subTitle, app.options)}
    </div>
);

const renderIndecisionApp = () => {
    const template = (
            <div>
                <h1>{app.title}</h1>
                {getSubtitleAndOptions(app.subTitle, app.options)}
            </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
