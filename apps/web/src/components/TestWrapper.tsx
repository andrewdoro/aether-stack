import Test from "./Test";
import TrpcProvider from "./TrpcProvider";

const TestWrapper = () => {
  return (
    <TrpcProvider>
      <Test />
    </TrpcProvider>
  );
};

export default TestWrapper;
