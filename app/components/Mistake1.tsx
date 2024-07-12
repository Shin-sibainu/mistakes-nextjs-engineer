import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

const Mistake1 = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <Component1 />
        {/* <Component2 /> */}
        {/* cc */}
        <Component2>
          <Component3 /> {/* sc */}
        </Component2>
      </main>
    </div>
  );
};

export default Mistake1;
