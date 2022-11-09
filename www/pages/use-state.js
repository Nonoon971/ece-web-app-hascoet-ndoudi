import Layout from '../components/layout';
import React, { useState } from 'react';

const State = () => {
    const [compt, setCount] = useState(0);

    return (
        <Layout>
            <div className="text-center m-auto">
                <button className="bg-blue-600 hover:bg-green-700 duration-300 text-white text-lg shadow p-4 rounded" onClick={() => setCount(compt + 1)}>
                    Click here
                </button>
                <p className='text-red-500 font-bold text-xl'>Ce bouton a été cliqué {compt} fois</p>
            </div>
        </Layout>

    )
}
export default State;
