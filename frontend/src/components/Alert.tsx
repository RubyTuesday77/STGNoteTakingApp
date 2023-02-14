import React from 'react';

const Alert = (props: { alert: { type: any; msg: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => {
    const capitalize = (word: string) => {
        if(word === 'danger') {
            word = 'error';
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div style={{ height: '50px' }}>
            {
                props.alert 
                &&
                    <div className={ `alert alert-${props.alert.type} alert-dismissible fade show` } role='alert'>
                        <strong>{ capitalize(props.alert.type) }</strong>
                : 
                    { props.alert.msg }
                </div>
            }
        </div>
    );
};

export default Alert;