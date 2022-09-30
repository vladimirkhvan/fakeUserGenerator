import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchUsers } from './utils/fetchUsers';

import style from './App.module.scss';

function App() {
    const [localization, setLocalization] = React.useState('en_GB');
    const [numberOfErrors, setNumberOfErrors] = React.useState(10);
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        setUsers(fetchUsers(30, localization, numberOfErrors));
    }, [localization, numberOfErrors]);

    const handleChange = (e) => {
        setLocalization(e.target.value);
    };
    const handleChangeErrors = (e) => {
        if(e.target.value < 0){
            setNumberOfErrors(0);
        } else {
            setNumberOfErrors(0);
        }
    }

    return (
        <div className={style.main}>
            <h1>fake data.</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Seed</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="0"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Select locale</label>
                    <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={handleChange}>
                        <option value={'en_GB'}>Great Britain</option>
                        <option value={'ru'}>Russia</option>
                        <option value={'ko'}>Korea</option>
                    </select>
                </div>
                <div className={style.range}>
                    <label htmlFor="customRange3" className="form-label">
                        Number of errors
                    </label>
                    <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="10"
                        step="0.25"
                        id="customRange3"
                        value={numberOfErrors}
                        onChange={(e) => {setNumberOfErrors(e.target.value)}}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Number of Errors</label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="0"
                        value={numberOfErrors}
                        onChange={(e) => {setNumberOfErrors(e.target.value)}}
                    />
                </div>
            </form>
            <div className={style.infiniteTable}>
                <InfiniteScroll
                    dataLength={users.length}
                    next={() => {
                        setUsers((prevUsers) => [...prevUsers, ...fetchUsers(10, localization, numberOfErrors)]);
                    }}
                    hasMore={true}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    <table className="table">
                        <thead>
                            <tr className={style.row}>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id} className={style.row}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user._id}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.address}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default App;
