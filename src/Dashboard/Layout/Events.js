import React from "react";
import img1 from "../../assets/asset 5.jpeg";
function Events() {
  const arr = [
    {
      id: 1,
      image: img1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      image: img1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: img1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      image: img1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      image: img1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="h-[45%] w-full  flex justify-center items-center">
      <div className="h-[95%] w-[98%]  bg-white rounded-2xl flex flex-col">
        <div className="h-[15%] w-full text-xl flex justify-start items-center">
          <h2 className="pl-8">Upcoming Events</h2>
        </div>
        <div className="h-[85%] w-full flex justify-around items-center">
          {arr.map((items) => {
            return (
              <div className="h-[90%] w-[18%] bg-[#eceef0] rounded-2xl flex  flex-col">
                <div className="h-[55%] w-full flex justify-center items-center">
                  <img
                    src={items.image}
                    className="h-full w-full rounded-2xl"
                  />
                </div>
                <div className="h-[45%] w-full flex justify-start items-center ">
                  <p1 className="text-start text-blue-700 text-[14px] pl-5">
                    {items.description}
                  </p1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
