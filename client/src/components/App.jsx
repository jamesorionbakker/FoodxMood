import React, { useEffect } from 'react';
import Header from 'components/header/Header';
import Dashboard from './Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { attemptLogIn } from './common/state/UserStateActions.js';
import store from './common/state/Store';
import { setViewportSize } from './common/state/viewportActions';

function App() {
    let userState = useSelector((state) => state.UserState);
    const dispatch = useDispatch();

    function handleResize() {
        let lastViewportSize = store.getState().viewport.width;
        let currentViewportSize = ((width) => {
            if (width >= 1200) return 5;
            if (width >= 992) return 4;
            if (width >= 768) return 3;
            if (width >= 576) return 2;
            return 1;
        })(window.innerWidth);
        if (lastViewportSize !== currentViewportSize) {
            dispatch(setViewportSize(currentViewportSize));
        }
    }

    useEffect(() => {
        handleResize()
        dispatch(attemptLogIn());
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Header />

            {userState.isLoggedIn && <Dashboard />}
        </div>
    );
}

export default App;
