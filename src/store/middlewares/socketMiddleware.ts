import {Middleware} from "redux";
import {RootState} from "@/store/store";
import {io, Socket} from "socket.io-client";
import {DefaultEventsMap} from "@socket.io/component-emitter";

const openSockets: Record<string, Socket<DefaultEventsMap, DefaultEventsMap>> = {}

const socketMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
    if (!action?.meta?.type || !action?.meta?.namespace || !action?.meta?.event) {
        return next({...action})
    }

    if (!openSockets[action.meta.namespace] && action.meta.namespace) {
        openSockets[action.meta.namespace] = io(`${process.env.NEXT_PUBLIC_API_URL}/${action.meta.namespace}`, {
            withCredentials: true,
            transports: ['websocket'],
            auth: {
                authorization: `Bearer ${store.getState().authSlice.access_token}`
            }
        })
    }

    if (action.meta.type === 'subscribe') {
        openSockets[action.meta.namespace].on(action.meta.event, (payload: any) => {
            store.dispatch({type: action.type, payload})
        })
    }

    if (action.meta.type === 'send') {
        openSockets[action.meta.namespace]?.emit(action.meta.event, action.payload)
    }

    if (action.meta.type === 'unsubscribe') {
        openSockets[action.meta.namespace]?.removeAllListeners(action.meta.event)
    }
}

export default socketMiddleware;
