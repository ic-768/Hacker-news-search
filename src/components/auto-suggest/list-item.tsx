import { Story } from "@/types";
import { motion } from "framer-motion";

interface ListItemProps {
  query: string;
  story: Story;
}
export default function ListItem({ story, query }: ListItemProps) {
  // split title into highlighted and non-highlighted spans
  const getHighlightedText = (text: string) => {
    if (!query) return text;

    // Add a literal backslash before each special character ($& is the  matched char)
    const escapedFilter = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedFilter})`, "gi");
    return text.split(regex).map((part, index) => {
      return part.toLowerCase() === query.toLowerCase() ? (
        <span className="relative" key={index}>
          <motion.span
            layoutId={`underline-${story.objectID}`}
            className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-300"
          />
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  return (
    <motion.li
      layoutId={story.objectID}
      exit={{ scale: 0 }}
      className="p-2 hover:bg-gray-100 cursor-pointer"
    >
      <p className="font-semibold">
        {getHighlightedText(story.title || story.story_title)}
      </p>
      <p className="text-sm text-gray-600">
        By {story.author} | {story.points} points | {story.num_comments}{" "}
        comments
      </p>
    </motion.li>
  );
}
