export function Form() {
  return (
    <div className="bg-gray-700 w-96 p-8 flex flex-col gap-6 rounded text-medium text-gray-100 border-2 border-gray-600">
      <h2 className="text-2xl">Subscribe for free</h2>
      <form action="" className="flex flex-col gap-2">
        <input type="text" name="name" id="name" placeholder="Your name" className="p-4 bg-gray-700 rounded outline-none focus:ring-2 focus:ring-green-500" />
        <input type="email" name="email" id="email" placeholder="Your email" className="p-4 bg-gray-700 rounded outline-none focus:ring-2 focus:ring-green-500" />
      </form>
      <button type="submit" className="bg-green-500 p-4 rounded hover:bg-green-700 transition-colors">
        SUBSCRIBE
      </button>
    </div>
  );
}
