import { useState, useEffect, Children, cloneElement } from "react";

function Carousel(props) {
  const { children } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } 
    else if (newIndex >= Children.count(children)){
       newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) { updateIndex(activeIndex + 1); }
    }, 3000);
    return () => {
      if (interval) { clearInterval(interval); }
    };
  });
  
  return (
    <div
      className="overflow-hidden  bg-blue-200"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* Inner */}
      <div
        className="whitespace-nowrap transition-transform duration-1000 h-[75vh]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, { width: "100%" });
        })}
      </div>
      {/* indicator */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "bg-green-600 text-white" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
