import { useState } from 'react';
import {store} from '../configureStore/store';
import { deposit, withdraw } from '../actions/accountActions';

const Operation = () => {
    const [sum, setSum] = useState(0);

    return (
        <div>
            <button onClick={() => store.dispatch(withdraw(sum))}>Withdraw</button>
            <input
                onChange={e => setSum(+e.target.value)}
                type="number"
                value={sum}
            />
            <button onClick={() => store.dispatch(deposit(sum))}>Deposit</button>
        </div >
    )
}

export default Operation