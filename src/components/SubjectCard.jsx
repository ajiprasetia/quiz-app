"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SubjectCard({ subject }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/quiz/${subject.name.toLowerCase()}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden h-48 bg-gray-100">
        <Image
          src={subject.image}
          alt={`${subject.name} image`}
          width={400}
          height={300}
          priority
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
          {subject.name}
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          <p className="text-center text-gray-600 text-base font-medium">
            {subject.questions.length} Questions
          </p>
          <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
