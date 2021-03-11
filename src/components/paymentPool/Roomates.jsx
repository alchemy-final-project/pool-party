import { useState, useEffect } from 'react';
import { getAllRoomates } from '../../services/tenants';

export const useRoomates = () => {
    const [loading, setLoading] = useState(true);
    const [roomates, setRoomates] = useState([]);

    useEffect(() => {
        getAllRoomates()
            .then(roomates => {
                setRoomates(roomates);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        roomates
    }
}
