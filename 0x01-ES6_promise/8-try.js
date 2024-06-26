export default function divideFunction(numerator, denominator) {
    if (denominator === 0) throw new Error('cannot divide by 0');
    return numerator / denominator;
  }
  import guardrail from './9-try';
  import divideFunction from './8-try';

  console.log(guardrail(() => { return divideFunction(10, 2) }));
  console.log(guardrail(() => { return divideFunction(10, 0) }))
