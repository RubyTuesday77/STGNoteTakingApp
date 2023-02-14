import React from 'react';
import AddNote from './AddNote';
import Notes from './Notes';

interface HomeProps {
    showAlert: (msg: string, type: string) => void;
}

const Home = (props: HomeProps) => {
    const { showAlert } = props;

    return (
        <div>
            <div className='container' style={{ 'width': '80%' }}>
                <Notes showAlert={showAlert} />
            </div>
            <AddNote showAlert={ showAlert }/>
        </div>
    );
};

export default Home;