import React, {useState, useEffect} from 'react';
import Modal from './Modal';
import axios from 'axios'
import TimesTable from './TimeTable'

const TIMESURL = `http://localhost:4000/openingtimes`;

const Times = () => {
    const [times, setTimes] = useState({})
    const [getError, setGetError] = useState(``);

    useEffect( () => {
        const getData = async () => {
            setTimes(await getTimes())
        }
        getData()
    }, [])

    const getTimes = async () => {
        try {
          const res = await axios.get(TIMESURL);
          return res.data.length ? ({ times: res.data }) : ({ error: `There are no times stored` });
        }
        catch (e) {
          setGetError(`Data not available from server: ${e.message}`)
          return ({ error: `Data not available from server: ${e.message}` });
        }
    };

    return (
        <div>
            {getError && <Modal handleClose={() => setGetError(``)} show={getError} />}
            <TimesTable data={times} />
        </div>
    );
};

export default Times;