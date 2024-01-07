
import Counter from '@/components/counter/Counter';
import Link from 'next/link';


const contactPge = () => {
    
    return (
        <div>
        <h1>This is contact page ll........................</h1>
        <Counter></Counter>
        <Link href={"/about"}>
        <button className='btn btn-secondary'>About</button></Link>
        </div>
    );
};

export default contactPge;