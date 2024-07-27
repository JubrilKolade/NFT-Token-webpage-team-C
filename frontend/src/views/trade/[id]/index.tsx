// Next, React
import { TradeCardDetails } from 'components/trade-card-details';
import { useRouter } from 'next/router';
import { FC } from 'react';

const TradePage: FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="md:hero mx-auto p-4">
            <h1>Trade Token {id}</h1>
            <TradeCardDetails />
        </div>
    );
};

export default TradePage;
