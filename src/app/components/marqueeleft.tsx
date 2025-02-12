export default function Bannerbelow() {
  const cards = [
    {
      description:
        "The garden vibe is beautiful and calming. The food is tasty, though the service can get a bit slow when it's crowded. Still worth it for the ambiance!",
      name: "Adnan Siddiqui",
      cafe: "Autumn Leaf Café",
      profileImg: "/profile.jpg",
    },
    {
      description:
        "Such a fun and quirky place! I always come here for the masala chai and cheese fries combo. It's perfect for chilling with friends.",
      name: "Adnan Siddiqui",
      cafe: "Chit Chat Chai",
      profileImg: "/profile.jpg",
    },
    {
      description:
        "This place is iconic! Their plum cake is unbeatable, and I always pair it with Irani chai. Great for a quick snack break during the day.",
      name: "Adnan Siddiqui",
      cafe: "Karachi Bakery Café",
      profileImg: "/profile.jpg",
    },
    {
      description:
        "Great platform for discovering Hyderabad cafés! It's easy to navigate, with detailed info on menus, hours, and ratings. Love the bookmark feature to save favorites. Adding a map view and user reviews would make it even better. Perfect for café hopping enthusiasts!",
      name: "Adnan Siddiqui",
      cafe: "Aaromale",
      profileImg: "/profile.jpg",
    },
  ];

  return (
    <div className="text-[#bebfa8] text-md pb-8 pt-3 mb-96 whitespace-nowrap relative overflow-x-clip">
      <div className="inline-flex absolute animate-scroll-rtl">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {cards.map((card, index) => (
              <div
                key={index}
                className="mx-4 border-2 border-[#000000] rounded-lg p-6 w-[300px] sm:w-[350px] md:w-[400px] flex flex-col justify-between  min-h-[15rem] sm:min-h-[16.875rem] md:min-h-[18.75rem] min-w-[18.75rem] sm:min-w-[25rem] md:min-w-[31.25rem]"
              >
                <p className="font-manrope font-medium text-black text-base sm:text-lg md:text-xl whitespace-normal my-auto flex">
                  &quot;{card.description}&quot;
                </p>
                <div className="flex items-center justify-between  text-sm sm:text-base md:text-xl">
                  <div className="flex items-center gap-2">
                    <img
                      src={card.profileImg}
                      alt=""
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                    />
                    <span className="font-manrope font-medium text-black">
                      {card.name}
                    </span>
                  </div>
                  <span className="font-manrope text-gray-600">
                    {card.cafe}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className="inline-flex absolute animate-scroll2-rtl"
        aria-hidden="true"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {cards.map((card, index) => (
              <div
                key={index}
                className="mx-4 border-2 border-[#000000] rounded-lg p-6 w-[300px] sm:w-[350px] md:w-[400px] flex flex-col justify-between min-h-[15rem] sm:min-h-[16.875rem] md:min-h-[18.75rem] min-w-[18.75rem] sm:min-w-[25rem] md:min-w-[31.25rem]"
              >
                <p className="font-manrope font-medium text-black text-base sm:text-lg md:text-xl whitespace-normal my-auto">
                  &quot;{card.description}&quot;
                </p>
                <div className="flex items-center justify-between text-sm sm:text-base md:text-xl">
                  <div className="flex items-center gap-2">
                    <img
                      src={card.profileImg}
                      alt=""
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                    />
                    <span className="font-manrope font-medium text-black">
                      {card.name}
                    </span>
                  </div>
                  <span className="font-manrope text-gray-600">
                    {card.cafe}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
