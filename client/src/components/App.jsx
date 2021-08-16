import React, { useEffect } from 'react';
import Header from 'components/header/Header';
import Dashboard from './Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { attemptLogIn } from './common/state/UserStateActions.js';
import store from './common/state/Store';
import { setViewportSize } from './common/state/ViewportActions';
import Welcome from './welcome/Welcome';

function App() {
    let loggedIn = useSelector((state) => state.UserState.isLoggedIn);

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
            if (currentViewportSize < 3) {
                dispatch(setViewportSize({ width: currentViewportSize, mobile: true }));
            } else {
                dispatch(setViewportSize({ width: currentViewportSize, mobile: false }));
            }
        }
    }

    useEffect(() => {
        handleResize();
        dispatch(attemptLogIn());
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Header />
            {loggedIn && <Dashboard />}
            {!loggedIn && <Welcome />}
        </div>
    );
}

export default App;
