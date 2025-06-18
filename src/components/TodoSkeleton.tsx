export default function TodoSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="p-4 rounded-lg shadow-md bg-white animate-pulse"
        >
          <div className="flex items-start">
            <div className="mr-3">
              <div className="h-5 w-5 bg-gray-200 rounded"></div>
            </div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
