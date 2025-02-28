import { motion } from "framer-motion";
import { X } from "lucide-react";

import { useFavorites } from "@/context/favorites/use-favorites";
import { Story } from "@/types";

interface ListItemProps {
  story: Story;
}

export default function ListItem({ story }: ListItemProps) {
  const { removeFromFavorites } = useFavorites();

  const onRemove = () => {
    removeFromFavorites(story);
  };

  return (
    <motion.li
      layoutId={`saved ${story.objectID}`}
      exit={{ scale: 0 }}
      className="flex w-full items-center border-b p-2"
    >
      <div className="p-2 flex-grow">
        <p className="font-semibold">{story.title || story.story_title}</p>
        <p className="text-sm text-gray-600">
          By {story.author} | {story.points} points | {story.num_comments}{" "}
          comments
        </p>
      </div>
      <button
        onClick={onRemove}
        className="transition-colors cursor-pointer p-1 rounded-full bg-red-500 text-white hover:bg-red-600"
      >
        <X size={16} />
      </button>
    </motion.li>
  );
}
