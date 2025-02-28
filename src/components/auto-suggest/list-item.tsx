import { Story } from "@/types";

export default function ListItem({ story }: { story: Story }) {
  return (
    <li className="p-2 hover:bg-gray-100 cursor-pointer">
      <p className="font-semibold">{story.title || story.story_title}</p>
      <p className="text-sm text-gray-600">
        By {story.author} | {story.points} points | {story.num_comments}{" "}
        comments
      </p>
    </li>
  );
}
