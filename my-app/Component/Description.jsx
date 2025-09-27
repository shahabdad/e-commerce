export default function Description({ text }) {
  return (
    <div className="mt-12">
      {/* Inline CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          .hover-zoom {
            display: inline-block;
            transition: transform 0.4s ease-in-out, font-size 0.3s ease-in-out, color 0.3s;
            cursor: pointer;
          }

          .hover-zoom:hover {
            transform: scale(0.2);   /* Zoom effect */
            font-size: 1.5rem;       /* Bigger text */
            color: #000000ff;          /* Black text */
          }
        `}
      </style>

      {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 animate-fadeIn hover-zoom">
        Description
      </h2> */}

      <p className="text-gray-600 leading-relaxed animate-fadeIn hover-zoom">
        {text}
      </p>
    </div>
  );
}
