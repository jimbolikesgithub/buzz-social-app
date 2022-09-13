// components
import { Buzz } from '../typings';

export const fetchBuzz = async () => {
    // Backend endpoint
    const res = await fetch(`https://twitter-clone-je.vercel.app/api/getBuzz`)

    const data = await res.json();
    const buzz: Buzz[] = data.buzz;

    return buzz
}   