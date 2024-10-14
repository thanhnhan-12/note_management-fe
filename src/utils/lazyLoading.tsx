import { Suspense } from 'react';

export default function LazyLoading<P>(Component: React.ComponentType & any) {
    return function LazyLoading(props: P) {
        return (
            <Suspense fallback="Page is loading" >
                <Component {...props} />
            </Suspense>
        );
    };
}
