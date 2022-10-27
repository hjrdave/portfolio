import React from 'react';

export const useNonInitialEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => {
    const initialRender = React.useRef(true);

    React.useEffect(() => {
        let effectReturns: void | (() => void) = () => { };

        if (initialRender.current) {
            initialRender.current = false;
        } else {
            effectReturns = effect();
        }

        if (effectReturns && typeof effectReturns === "function") {
            return effectReturns;
        }
    }, deps);
};

export const useNonInitialLayoutEffect = (effect: React.EffectCallback, deps?: React.DependencyList) => {
    const initialRender = React.useRef(true);

    React.useLayoutEffect(() => {
        let effectReturns: void | (() => void) = () => { };

        if (initialRender.current) {
            initialRender.current = false;
        } else {
            effectReturns = effect();
        }

        if (effectReturns && typeof effectReturns === "function") {
            return effectReturns;
        }
    }, deps);
};