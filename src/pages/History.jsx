function History(props) {
  return (
    <>
      <div className="bg-[#292A2D] absolute inset-10 flex flex-col w-fit ml-auto mr-auto p-10">
        <div className="flex flex-row pb-10 justify-center items-center">
          <button
            onClick={props.onClick}
            className="w-full text-2xl text-white font-semibold"
          >
            History
          </button>
          <button className="flex-end">
            <svg
              width="21"
              height="23"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5625 0V1.27778H0V3.83333H1.3125V20.4444C1.3125 21.1222 1.58906 21.7722 2.08134 22.2515C2.57363 22.7308 3.24131 23 3.9375 23H17.0625C17.7587 23 18.4264 22.7308 18.9187 22.2515C19.4109 21.7722 19.6875 21.1222 19.6875 20.4444V3.83333H21V1.27778H14.4375V0H6.5625ZM3.9375 3.83333H17.0625V20.4444H3.9375V3.83333ZM6.5625 6.38889V17.8889H9.1875V6.38889H6.5625ZM11.8125 6.38889V17.8889H14.4375V6.38889H11.8125Z" />
            </svg>
          </button>
        </div>

        <div className="rounded-xl p-20 w-75 h-50 bg-[#3B3D43] text-xl font-semibold text-white text-center">
          <h1>Empty!</h1>
          <h1> Do some calculations.</h1>
        </div>
      </div>
    </>
  );
}
export default History;
