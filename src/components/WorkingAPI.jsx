import React from "react";

const WorkingAPI = ({ userData }) => {
  // Destructuring for cleaner code
  const { name, picture, location, email, cell } = userData;

  return (
    <div className="flex justify-center items-center">
      {/* Container with perspective */}
      <div className="group h-96 w-64 [perspective:1000px]">
        {/* The Inner Card that rotates */}
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          
          {/* Front Side: Image and Name */}
          <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={picture.large}
              alt={name.first}
            />
            <div className="absolute bottom-0 w-full p-4 bg-black/50 text-white rounded-b-xl backdrop-blur-sm">
              <p className="font-bold capitalize">{name.title}. {name.first} {name.last}</p>
              <p className="text-xs opacity-80 uppercase tracking-widest">{location.city}</p>
            </div>
          </div>

          {/* Back Side: Detailed Info */}
          <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-900 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-xl font-bold mb-4 border-b border-yellow-400 pb-2 capitalize">
               Contact Details
            </h3>
            <div className="space-y-3 text-sm">
              <p><span className="text-yellow-400 block font-bold">Email:</span> {email}</p>
              <p><span className="text-yellow-400 block font-bold">Cell:</span> {cell}</p>
              <p><span className="text-yellow-400 block font-bold">Address:</span> {location.street}, {location.state}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkingAPI;