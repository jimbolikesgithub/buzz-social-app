// components
import { Buzz } from '../typings';

export const fetchBuzz = async () => {
    // Backend endpoint
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getBuzz`)

    const data = await res.json();
    const buzz: Buzz[] = data.buzz;

    return buzz
}   