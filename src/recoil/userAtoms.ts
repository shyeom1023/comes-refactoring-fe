import {atom} from 'recoil';
import {AuthUser} from "../services/auth/authService";
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist();


export const userState = atom<AuthUser | null>({
    key: 'userState',
    default: null,
    effects_UNSTABLE: [persistAtom],
});

export const isAuthenticatedState = atom<boolean>({
    key: 'isAuthenticatedState',
    default: false,
    effects_UNSTABLE: [persistAtom],
});