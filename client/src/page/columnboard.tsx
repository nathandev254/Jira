

type columnprops = {
  title: string;
  length: number;
};

function column({ title, length }: columnprops) {



  return (
    <div className="flex justify-between items-center mb-3">
      <h2>{title}</h2>
      <span className="text-sm text-gray-800 h-5 w-5 rounded-full bg-gray-300 flex justify-center items-center">
        {length}
      </span>
    </div>
  );
}

export default column;
