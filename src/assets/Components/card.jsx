import React from "react";

const Card = ({ user }) => {
  return (
    <div className="w-[280px] bg-white rounded-xl shadow p-4">

      {/* Cover Image */}
      <img
        src={user.coverImage}
        alt="cover"
        className="h-24 w-full object-cover rounded-lg"
      />

      {/* Profile */}
      <div className="flex flex-col items-center -mt-8">
        <img
          src={user.profile}
          alt={user.fullName}
          className="h-16 w-16 rounded-full border-4 border-white object-cover"
        />

        <h3 className="mt-2 font-semibold">{user.fullName}</h3>
        <p className="text-sm text-gray-500">{user.title}</p>
      </div>

      {/* Info text (NEW) */}
      <p className="text-sm text-gray-600 text-center mt-3">
        {user.info}
      </p>

      {/* Stats */}
      <div className="flex justify-between mt-4 text-center text-sm">
        <div>
          <p className="font-semibold">{user.postCount}</p>
          <span className="text-gray-500">Posts</span>
        </div>
        <div>
          <p className="font-semibold">{user.likeCount}</p>
          <span className="text-gray-500">Likes</span>
        </div>
        <div>
          <p className="font-semibold">{user.viewCount}</p>
          <span className="text-gray-500">Views</span>
        </div>
      </div>

      {/* Follow Button */}
      <button
        className={`mt-4 w-full py-2 rounded-lg text-sm font-medium ${user.followed
            ? "bg-gray-200 text-gray-700"
            : "bg-black text-white"
          }`}
      >
        {user.followed ? "Following" : "Follow"}
      </button>

    </div>
  );
};

export default Card;
