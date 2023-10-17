import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';

function Calculator(props) {
    return (
        <div>
            <NumberButton />
            <OperatorButton />
            <EqualButton />
        </div>
    );
}

export default Calculator;
