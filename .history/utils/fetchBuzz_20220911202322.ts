import { Buzz } from './../.history/typings.d_20220911194546';
export const fetchBuzz = async () => {
    // Backend endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBuzz`)

    const data = await res.json();
    const buzz: Buzz[]
}