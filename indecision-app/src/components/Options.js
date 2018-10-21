import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3>
                    <button 
                            className="button button--link"
                            onClick={props.handleRemoveAll}>Remove all
                    </button>
            </div>
                {props.options.length === 0 && <p className="widget__message">Please add some data</p>}
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
};

export default Options;