import { Briefcase, GraduationCap } from "lucide-react";
import { TimelineItem as TimelineItemType } from "@/types";

interface TimelineItemProps {
  item: TimelineItemType;
  isLeft: boolean;
}

export default function TimelineItem({ item, isLeft }: TimelineItemProps) {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <div
      className={`flex items-center ${isLeft ? "flex-row-reverse" : ""} mb-12`}
    >
      <div className={`w-1/2 ${isLeft ? "text-right pr-8" : "pl-8"}`}>
        <div className={`inline-block ${isLeft ? "text-right" : "text-left"}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div
              className={`flex items-center gap-3 mb-3 ${
                isLeft ? "justify-end" : ""
              }`}
            >
              <div className="p-2 bg-purple-100 rounded-full">
                <Icon className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-purple-600 font-medium">
                {item.period}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {item.title}
            </h3>

            {item.company && (
              <p className="text-purple-600 font-medium mb-2">{item.company}</p>
            )}

            {item.institution && (
              <p className="text-purple-600 font-medium mb-2">
                {item.institution}
              </p>
            )}

            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-12">
        <div className="absolute h-full w-0.5 bg-purple-200"></div>
        <div className="relative z-10 w-4 h-4 bg-purple-600 rounded-full ring-4 ring-purple-100"></div>
      </div>

      <div className="w-1/2"></div>
    </div>
  );
}
